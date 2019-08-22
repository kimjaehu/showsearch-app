import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from './MovieCard.js';

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = '';

    if (movies.Response === 'True') {
      content = movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ));
    } else if (movies.Response === 'false') {
      content = <h5>No movies found!</h5>;
    } else {
      content = null;
    }
    return <div className='row'>{content}</div>;
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(mapStateToProps)(MoviesContainer);
