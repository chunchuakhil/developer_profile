import React, { useState } from 'react';
import search from './Images/search.svg';

const Search = ({ searchfn }) => {
  const [text, settext] = useState('');

  const filtertext = (e) => {
    if (e.target.value === '') {
      searchfn('');
    }
    settext(e.target.value);
  };
  const searchHandler = (event) => {
    if (!text) {
      alert('Enter Developer name to search');
    } else {
      searchfn(text);
    }
  };
  return (
    <>
      <div className='search'>
        <input
          className='searchInput'
          type='text'
          id='search'
          value={text}
          placeholder='search for username'
          onChange={(e) => {
            filtertext(e);
          }}
        ></input>
        <div className='searchIcon' style={{ marginTop: '17px' }}>
          <button onClick={searchHandler}>
            <img src={search} style={{ width: '30px' }} alt='searchIcon'></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
