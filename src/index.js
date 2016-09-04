import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import config from '../app.config';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
const YOUTUBE_API_KEY = config.YOUTUBE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YOUTUBE_API_KEY, term: 'react native'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
