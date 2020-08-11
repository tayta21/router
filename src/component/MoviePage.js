import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
// img
import johnwick from './img/john wick.jpg'
import Extraction from './img/Extraction.jpg'
import FantasyIsland from './img/Fantasy Island.jpg'
import BadBoysforLife from './img/Bad Boys for Life.jpg'

const MoviePage = (props) => {
    console.log(props.match.params.id)
    const Movies = [
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
    ]
    const [movie, setMovie] = useState({})
    useEffect(() => {
        var theMovie = Movies.filter(el => el.id == props.match.params.id)[0]
        setMovie(theMovie)
    }, [])
    return (
        <div>
            <Link to="/">
                <button renderAs="button" className='buttonc'>
                    <span>return</span>
                </button>
            </Link>
            <div className="fisrtbox ">
                <h2 className="tooltiptext titlebox" >{movie.title}</h2>
                <img className="img" alt='movie' src={movie.img} />
                <div className="box tooltiptext">
                    <p className="max">{movie.description}</p>
                </div>

            </div>
        </div>
    )
}

export default MoviePage;
