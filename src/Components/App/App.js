import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
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
      playlistName: 'New Playlist', 
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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) { 
    if (this.state.playlistTracks.find(savedTrack => 
      savedTrack.id === track.id)) {
      return;
    }
  }
  
  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    });
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(tracks => {
      this.setState({
        searchResults: tracks
      })
    });
  }

    render() {
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist onSave={this.savePlaylist} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
          </div> 
      </div>
      );
    }
}

export default App;
