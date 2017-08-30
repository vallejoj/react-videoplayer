import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//components
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAVqwyl-0bSFR9WSlpDq2obcGPajJIcLXw';



    class App extends Component {
      constructor(props){
        super(props);

        this.state={ videos: []};

        YTSearch({key: API_KEY, term: 'pole dancer'}, function(data){
        this.setState({videos: data})
        });

      }

      render()  {
        return  (
        <div>
        <SearchBar/>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.querySelector('.container'));
registerServiceWorker();
