import React, { useEffect, useState } from 'react'
import axios from "axios"
import Movie from './Movie';
import Description from './Description';

const Movies = () => {
    const[movies,setMovies] = useState([]);

    useEffect(()=>{
        async function getData(){
            const res = await axios.get("https://api.tvmaze.com/search/shows?q=all")
            const resData =  res.data
            // console.log(resData[0])
            // console.log(res)
            // console.log(resData[0].show.runtime)
            
            setMovies(resData)
            console.log(resData)
            return resData
        }
        getData();
    },[])

  return (
    <div>
        {movies.map((item,index)=>
        <>
            <Movie 
            image = {item.show.image.medium}
            name = {item.show.name}
            runtime = {item.show.runtime}
            language = {item.show.language}
            website = {item.show.url}
            rating ={item.show.rating.average}
            description = {item.show.name}
            index = {item.show.id}
            />
            {/* <Description 
            description = {item.show.name}
            /> */}
        </>
        )}
        {/* <Movie
        runtime = "30" /> */}
    </div>
  )
}

export default Movies

// async function getData(){
//     const res = await axios.get("https://jsonplaceholder.typicode.com/users/")
//     const resData = res.data
//     setName(resData)
//     // console.log(resData)
//     return resData
//   }  
//   getData();