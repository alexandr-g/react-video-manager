import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import config from '../app.config';
import SearchBar from './components/SearchBar';

const YOUTUBE_API_KEY = config.YOUTUBE_API_KEY;

YTSearch({key: YOUTUBE_API_KEY, term: 'react native'}, function(data) {
  console.log(data);
});

const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
