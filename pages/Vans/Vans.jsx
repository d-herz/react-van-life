import React from 'react';
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import { getVans } from "../../api"

export function loader() {
  return defer({ vans: getVans() })
}

function Vans() {
  // Pulling in Data with loader function (instead of useEffect and fetch)
  const dataPromise = useLoaderData()
  // console.log(vans)

  // For using the filters to display certain vans
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  // console.log(typeFilter)

  // Error states
  const [error, setError] = React.useState(null)

  // Handler function for setting, deleting, or stacking query params:
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key)
      } else {
        prevParams.set(key, value)
      }
      return prevParams
    })
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  function renderVans(vans) {
    const displayedVans = typeFilter
      ? vans.filter(van => van.type === typeFilter)
      : vans

    const vansCard = displayedVans.map(van => {
      return (
        <div key={van.id} className="van-tile">
          <Link
            to={van.id}
            state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter
            }}
          >
            <img src={van.imageUrl} />
            <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </Link>
        </div>
      )
    })
    return (
      <>
        <div className="van-list-filter-buttons">
          <button
            className={`van-type simple ${typeFilter === "simple" ? 'selected' : ""}`}
            onClick={() => handleFilterChange("type", "simple")}
          >
            Simple
          </button>
          <button
            className={`van-type luxury ${typeFilter === "luxury" ? 'selected' : ""}`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            Luxury
          </button>
          <button
            className={`van-type rugged ${typeFilter === "rugged" ? 'selected' : ""}`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            Rugged
          </button>
          {typeFilter ? (
            <button
              className='van-type clear-filters'
              onClick={() => handleFilterChange("type", null)}
            >Clear filter </button>

          ) : null}
        </div>
        <div className="van-list">
          {vansCard}
        </div>
      </>
    )
  }

  return (
    <div className="van-list-container">

      <h1>Explore our van options</h1>
      <React.Suspense fallback={<h1>Loading vans...</h1> }>
        <Await resolve={dataPromise.vans}>
          {renderVans}
        </Await>
      </React.Suspense>
    </div>
  )
}

export default Vans
