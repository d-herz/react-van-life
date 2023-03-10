import React from 'react';
import { useParams } from 'react-router-dom';

function VanDetail(props) {
  
  const params = useParams()
  const [vanDetails, setVanDetails] = React.useState([])

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans))

  }, [params.id])
  console.log(vanDetails)
  
  return (
    <div className='van-detail-container'>
      {vanDetails ? (
        <div className="van-detail">
          <img src={vanDetails.imageUrl} />
          <i className={`van-type ${vanDetails.type} selected`}>{vanDetails.type}</i>
          <h2>{vanDetails.name}</h2>
          <p className='van-price'>${vanDetails.price}<span>/day</span></p>
          <p>{vanDetails.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
        ) : <h2>Loading...</h2>
      }

    </div>
  )
}

export default VanDetail
