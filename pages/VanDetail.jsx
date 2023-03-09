import React from 'react';
import { useParams } from 'react-router-dom';


function VanDetail(props) {
  
  const params = useParams()
  console.log(params)
  return (
    <div>VanDetail page goes here</div>
  )
}

export default VanDetail
