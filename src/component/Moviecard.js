import React, { Component } from 'react'
import johnwick from './img/john wick.jpg'
import '../App.css'
import { Router } from 'react-router-dom';
import { Link, Route, Switch } from "react-router-dom";



class MovieCard extends Component {

    render() {
        return (

            <div className="fisrtbox ">
                    <Link to={`/MoviePage/${this.props.movie.id}`}>
                        <button renderAs="button" className='buttonc'>
                            <span>click to see full stats</span>
                        </button>
                    </Link>
                {/* <button className='buttonc'>click here</button> */}
                <h2 className="tooltiptext titlebox" >{this.props.movie.title}</h2>
                <img className="img" src={this.props.movie.img} alt='movie' />
                <div className="box tooltiptext">
                    <p className="max">{this.props.movie.description}</p>
                </div>

            </div>
        )
    }

}

export default MovieCard;