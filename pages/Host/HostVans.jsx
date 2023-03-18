import React from 'react';
import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '../../api';

export function loader() {
  return defer({ hostVans: getHostVans() })
}


function HostVans(props) {

  const dataPromise = useLoaderData()

  // const [hostVans, setHostVans] = React.useState([])

  // React.useEffect(() => {
  //   fetch("/api/host/vans")
  //     .then(res => res.json())
  //     .then(data => setHostVans(data.vans))

  // }, [])
  // console.log(hostVans)


  function renderHostVans(hostVans) {

    const hostVansCard = hostVans.map(van => {
      return (
        <Link
          to={van.id}
          key={van.id}
          className="host-van-link-wrapper"
        >
          <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
            <div className="host-van-info">
              <h3>{van.name}</h3>
              <p>${van.price}/day</p>
            </div>
          </div>
        </Link>
      )
    })

    return (
      <div className="host-van-list">
        {
          hostVans.length > 0 ? (
            <section>
              {hostVansCard}
            </section>
          ) : (
            <h2>Loading...</h2>
          )
        }
      </div>
    )
  }

  return (
    <section>
      <h1 className='host-vans-title'>Your listed vans</h1>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={dataPromise.hostVans}>
          {renderHostVans}
        </Await>
      </React.Suspense>
    </section>
  )
}

export default HostVans
