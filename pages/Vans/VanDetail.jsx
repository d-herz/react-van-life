import React from 'react';
import { Link, useLocation, useLoaderData, defer, Await } from 'react-router-dom';
// import { getVans } from '../../api';
import { getVan } from '../../api/firebase';



export function loader({ params }) {
  // console.log(params.id)
  const id = params.id
  return defer({ vanDetails: getVan(id) })
}

function VanDetail() {
  const location = useLocation()
  const dataPromise = useLoaderData()
  // console.log(dataPromise)
  
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  // const params = useParams()

  // const [vanDetails, setVanDetails] = React.useState([])

  // React.useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then(res => res.json())
  //     .then(data => setVanDetails(data.vans))

  // }, [params.id])

  return (
    <div className='van-detail-container'>

      <Link
        to={`..${search}`}
        relative="path"
        className="back-button"
      >
        &larr; <span>Back to {type} vans</span>
      </Link>

      <React.Suspense fallback={<h2>Loading van details...</h2>}>
        <Await resolve={dataPromise.vanDetails}>
          {(vanDetails) => {
            return (
              <div className="van-detail">
                <img src={vanDetails.imageUrl} />
                <i className={`van-type ${vanDetails.type} selected`}>{vanDetails.type}</i>
                <h2>{vanDetails.name}</h2>
                <p className='van-price'>${vanDetails.price}/day</p>
                <p>{vanDetails.description}</p>
                <button className="link-button">Rent this van</button>
              </div>
            )
          }}
        </Await>

      </React.Suspense>

    </div>
  )
}

export default VanDetail
