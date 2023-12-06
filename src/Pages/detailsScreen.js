import React from 'react'
import { useParams } from 'react-router-dom';



export const DetailsScreen = () => {
    const { imdbID } = useParams();
  return (
    <div>
      <h2>Movie Details</h2>
      <p>IMDb ID: {imdbID}</p>
    </div>
  )
}
