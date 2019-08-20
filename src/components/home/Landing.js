import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Spinner from '../layout/spinner'

export class Landing extends Component {
  render() {
    
    return (
      <div className='container'>
        <SearchForm />
      </div>
    );
  }
}

export default Landing;
