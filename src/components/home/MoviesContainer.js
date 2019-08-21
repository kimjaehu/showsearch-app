import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from './MovieCard.js';

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    content =
      movies.Response === 'True' ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <h5>No movie found!</h5>
      );

    return <div className='row'>{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
