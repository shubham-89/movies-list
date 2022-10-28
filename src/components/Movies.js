import React from "react";
import "../CSS/Style.css"

const Movies=(props)=>{ 
    return(
        <>
           {props.movie.map(movie=>{
           
            return <div className="moviItem">
            <img className="moviImage" src={movie.img.src} alt={movie.img.alt}/>
             <div className="moviText">
              <h1 className="text">{movie.title}</h1>
              <h1 className="text">({movie.year}) </h1>
              <p className="text"> Distributer: {movie.distributor}</p>
              
              <p className="text">Amount: {movie.amount}</p>
              </div>
            </div>
            
           })};
        </>
    )
}

export default Movies;