import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//components
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyAVqwyl-0bSFR9WSlpDq2obcGPajJIcLXw';



    class App extends Component {
      constructor(props){
        super(props);

        this.state={ videos: []};

        YTSearch({key: API_KEY, term: 'Sergia Loiuse Anderson'},(videos)=>{
        this.setState({videos})
        });

      }

      render()  {
        return  (
        <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.querySelector('.container'));
registerServiceWorker();
