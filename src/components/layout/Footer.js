import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <div className='footer p-3 mt-4 text-center bg-dark text-light'>
            <span className='text-warning font-weight-normal'>Jay Kim </span>
            with Redux JS and{' '}
            <a
              href='http://www.omdbapi.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              OMDB
            </a>{' '}
            API
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
