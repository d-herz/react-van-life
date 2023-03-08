import React from 'react'



/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch(/api/vans)` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */

function Vans({ vans }) {

  const vansCard = vans.map(data => {
    return (

      <div><h1>{data.name}</h1></div>
    )
  })
}

export default Vans
