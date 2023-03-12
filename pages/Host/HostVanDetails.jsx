import React from 'react';
import { NavLink, Link, Outlet, useParams } from 'react-router-dom';


function HostVanDetails(props) {
  const params = useParams()
  const [hostVanDetails, setHostVanDetails] = React.useState([])

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setHostVanDetails(data.vans))

  }, [params.id])
  // console.log(hostVanDetails)

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
    </section>
  )
}

export default HostVanDetails
