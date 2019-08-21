import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className='col-md-4 col-lg-3 mb-5'>
        <div className='card card-body bg-none text-center h-100'>
          <img
            className='card-img-top w-100 mb-2'
            src={movie.Poster}
            alt='Movie Cover'
          />
          <h5 className='card-title text-dark card-title'>
            {movie.Title} - {movie.Year}
          </h5>
          <Link className='card-link' to={'/movie/' + movie.imdbID}>
            Movie Details
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
