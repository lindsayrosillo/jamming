import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './App';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
        {
          id: 1,
          name: 'This Song',
          artist: 'Drake',
          album: 'This is it'
        },
        {
          id: 2,
          name: 'Jamming',
          artist: 'Bob Marley',
          album: 'One Love',
        },
        {
          id: 3, 
          name: 'Carolina on my mind',
          artist: 'James Taylor',
          album: 'Sweet Baby James'
        }
      ]
    }
  }

    render() {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
          <!--Search Bar compenent-->
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <!--playlist compenent-->
          </div>
          </div>
      </div>
      );
    }
}

export default App;
