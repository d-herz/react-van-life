import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {
  const { hostVanDetails } = useOutletContext()

  return (
    <section className='host-van-detail-info'>
      <h4>Name: {hostVanDetails.name}</h4>
      <h4>Category: {hostVanDetails.type}</h4>
      <h4>Description: {hostVanDetails.description}</h4>
      <h4>Visibility: public</h4>

    </section>
  )
}

export default HostVanInfo
