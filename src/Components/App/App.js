import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './App';
import Playlist from './Playlist';

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
      ],
      playlistName: '', 
      playlistTracks: [
        {id: '',
        name: '',
        artist: '',
        album: ''
        },
        {
          id: '',
          name: '',
          artist: '',
          album: ''
        },
        {
          id: '',
          name: '',
          artist: '',
          album: ''
        }
      ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) { 
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
  }
  
  removeTrack(track) {

  }

    render() {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
          <!--Search Bar compenent-->
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
          </div>
      </div>
      );
    }
}

export default App;
