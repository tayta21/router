import React from 'react';
import MovieCard from './Moviecard';


function MovieList(props) {

    console.log(props)
    return (
     <div className="listMovies">
         {props.movies.map(el => <MovieCard movie={el}/>)}
     </div>
    );
  }
  
  export default MovieList;