import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"

const Description = () => {

    const[movie,setMovie] = useState([]);
 
    const { id  } = useParams()

    // const getData = ()=>{
    //     fetch(`https://api.tvmaze.com/shows/${id}`)
    //     .then(res => res.json())
    //     .then(data => setMovie)
    // }
    // useEffect(()=>{
    //     getDetails()
    // },[])

    useEffect(()=>{
        async function getDetails(){
            const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
            const resData =  res.data
            // console.log(resData[0])
            // console.log(res)
            // console.log(resData[0].show.runtime)
            
            setMovie(resData)
            console.log(resData)
            return resData
        }
        getDetails();
    },[])

    // const getDetails = async () =>{
    //     const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
    //     const resData =  res.data
    //     setMovie(resData)
    //     console.log(resData)
    //     return resData
    // }

  return (
    <div>
        {/* <h1>Hii hwo are you</h1> */}
        {/* <p>{movie.summary}</p> */}
        <h1>{movie.name}</h1>
        <p><h3>Movie-Summary</h3>{movie.summary}</p>
    </div>
  )
}

export default Description;