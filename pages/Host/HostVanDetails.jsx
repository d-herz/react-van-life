import React from 'react';
import { useParams } from 'react-router-dom';


function HostVanDetails(props) {

  const params = useParams()
  const [hostVanDetails, setHostVanDetails] = React.useState([])

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setHostVanDetails(data.vans))
    
  }, [params.id])
  console.log(hostVanDetails)

  return (
    <div>
      
      {hostVanDetails ? (
        <div className="van-detail">
          <img src={hostVanDetails.imageUrl} />
          <i className={`van-type ${hostVanDetails.type} selected`}>{hostVanDetails.type}</i>
          <h2>{hostVanDetails.name}</h2>
          <p className='van-price'>${hostVanDetails.price}<span>/day</span></p>
          <p>{hostVanDetails.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : <h2>Loading...</h2>
      }

    </div>
  )
}

export default HostVanDetails
