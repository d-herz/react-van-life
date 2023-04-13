import React from 'react'
import { useOutletContext } from 'react-router-dom'


function HostVanPricing(props) {
  const { hostVanDetails } = useOutletContext()

  return (
    <h3 className="host-van-price">${hostVanDetails.price}<span>/day</span></h3>
  )
}

export default HostVanPricing
