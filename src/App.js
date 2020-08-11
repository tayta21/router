import React, { useState } from 'react';
import './App.css';
import './App.css'


// img
import johnwick from './component/img/john wick.jpg'
import Extraction from './component/img/Extraction.jpg'
import FantasyIsland from './component/img/Fantasy Island.jpg'
import BadBoysforLife from './component/img/Bad Boys for Life.jpg'



// pages
import MovieList from './component/MovieList';


function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      img: johnwick,
      title: 'John Wick',
      description: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
    },
    {
      id: 2,
      img: Extraction,
      title: 'Extraction',
      description: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
    },
    {
      id: 3,
      img: FantasyIsland,
      title: 'Fantasy Island',
      description: "A horror adaptation of the popular '70s TV show about a magical island resort.",
    },
    {
      id: 4,
      img: BadBoysforLife,
      title: 'Bad Boys for Life',
      description: "The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.",
    },
   
  ])

  return (
    <div >

      <div className="containar">
      <MovieList movies = {movies} />
      </div>

    </div>
  );
}

export default App;