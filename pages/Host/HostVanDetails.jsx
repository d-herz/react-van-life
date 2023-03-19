import React from 'react';
import { NavLink, Link, Outlet, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '../../api';

export function loader({ params }) {
  const id = params.id
  return defer({ hostVanDetails: getHostVans(id) })
}

function HostVanDetails() {
  const dataPromise = useLoaderData()
  // console.log(dataPromise)

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <section>

      <Link
        to=".."
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to all vans</span>
      </Link>

      <React.Suspense fallback={<h2>Loading van details...</h2>} >
        <Await resolve={dataPromise.hostVanDetails}>
          {(hostVanDetails) => {
            return (
              <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                  <img src={hostVanDetails.imageUrl} />
                  <div className="host-van-detail-info-text">
                    <i
                      className={`van-type van-type-${hostVanDetails.type}`}
                    >
                      {hostVanDetails.type}
                    </i>
                    <h3>{hostVanDetails.name}</h3>
                    <h4>${hostVanDetails.price}/day</h4>
                  </div>
                </div>

                <nav className='host-van-detail-nav'>
                  <NavLink
                    to='.'
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                  >
                    Details
                  </NavLink>

                  <NavLink
                    to='pricing'
                    style={({ isActive }) => isActive ? activeStyle : null}
                  >
                    Pricing
                  </NavLink>

                  <NavLink
                    to='photos'
                    style={({ isActive }) => isActive ? activeStyle : null}
                  >
                    Photos
                  </NavLink>

                </nav>

                <Outlet
                  context={{ hostVanDetails }}
                />

              </div>

            )
          }}
        </Await>
      </React.Suspense>

    </section>
  )
}

export default HostVanDetails
