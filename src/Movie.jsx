import React from 'react'
import "./Movie.css"
import { Link, Route, Routes } from "react-router-dom";

const Movie = (props) => {
  return (
    <div className='main'>
        <div className='card'>
            <div className='left_side'>
                <h1 className='image_box'>
                    <img className='image' src={props.image} alt="avatar"/>
                </h1>
            </div>
            <div className='right_side'>
                <h1 className='name'>{props.name}</h1>
                <p>Runtime:{props.runtime}</p>
                <div className='contacts'>
                    <p>Language:{props.language}</p>
                    <p>Website: <a href={props.website}>Website</a> </p>
                    <p>Rating:{props.rating}</p>
                    <p>{props.index}</p>
                    <Link to={`/movie/${props.index}`}>Details</Link>
                    
                    {/* <p><Routes><Route path='*' element={<div>{props.name}</div>} /></Routes></p> */}
                </div>
                {/* path="/description" element={<Description />} */}
            </div>
            
        </div>
    </div>
  )
}

export default Movie;