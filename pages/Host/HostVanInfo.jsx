import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {
  const description = useOutletContext()
  console.log(description)

  return (
    <section>
      <h1>{description}</h1>

    </section>
  )
}

export default HostVanInfo
