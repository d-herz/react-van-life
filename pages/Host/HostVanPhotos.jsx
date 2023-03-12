import React from 'react'
import { useOutletContext } from 'react-router-dom'


function HostVanPhotos(props) {
  const { hostVanDetails } = useOutletContext()

  return (
    <img src={hostVanDetails.imageUrl} className="host-van-detail-image" />

  )
}

export default HostVanPhotos
