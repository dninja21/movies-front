import React, { useState} from 'react';
import {useEffect} from 'react'
import './App.css'
import seachIcon from './Search.svg'
import MovieCard from './Moviecard';


const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=c9519f4d';










const App=()=>{

const [movies,setMovies]=useState([])
const [src,setSrc]=useState('')

 const searchMovies=async(title)=>{
     const response=await fetch(`${API_URL}&s=${title}`)
     const data= await response.json();
     setMovies(data.Search);
 }

 useEffect(()=>{
    searchMovies('spiderman')
 },[])




    return(
        <div className="app">

            <h1> Movies Front</h1>
            <div className="search">
                <input
                  placeholder="Search Your favorite Movies"
                  value={src}
                  onChange={(e)=>setSrc(e.target.value)}
                />
                <img 
                src={seachIcon} 
                alt="search"
                onClick={()=>searchMovies(src)}
                />   
            </div>
            
             {
                 movies?.length>0
                 ?(
                    <div className="container">
                     {movies.map((movie)=>(<MovieCard movie={movie}/>))}
                    </div>

                 ):(

                    <div className="empty">
                    <h2>No Movies Found</h2>
                    </div>

                   )
               
                 

             }
                        


            

            </div> 
          
        
           
         
           
     
        

    );
}
export default App;