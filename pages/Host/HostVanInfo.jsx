import React from 'react'

function HostVanInfo(props) {



  return (
    <section>

      <Link
        to=".."
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to all vans</span>
      </Link>

      <Outlet />
      {hostVanDetails ? (
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

          <Outlet />
          <p>{hostVanDetails.description}</p>

        </div>
      ) : <h2>Loading...</h2>
      }

    </section>
  )
}

export default HostVanInfo
