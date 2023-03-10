import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from "../../api"

function Vans(props) {
  const [searchParams, setSearchParams] = useSearchParams()

  const [loading, setLoading] = React.useState(false)

  const typeFilter = searchParams.get("type")
  // console.log(typeFilter)

  // State Array for incoming Vans data
  const [vans, setVans] = React.useState([])

  // Fetch to "api" relative path because same domain
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true)
      const data = await getVans()
      setVans(data)
      setLoading(false)
    }
    loadVans()
  }, [])
  // console.log(vans)

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

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="van-list-container">

      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${typeFilter === "simple" ? 'selected' : "" }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${typeFilter === "luxury" ? 'selected' : "" }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${typeFilter === "rugged" ? 'selected' : "" }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        { typeFilter ? (
          <button
            className='van-type clear-filters'
            onClick={() => handleFilterChange("type", null)}
          >Clear filter </button>

        ) : null}
      </div>
      <div className="van-list">
        {vansCard}
      </div>
    </div>
  )
}

export default Vans
