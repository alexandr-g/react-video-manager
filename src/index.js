import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
