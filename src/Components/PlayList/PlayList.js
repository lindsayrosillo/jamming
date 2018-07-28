import React from 'react';
import TrackList from '../TrackList/TrackList';
import './PlayList.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    } 
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
                <TrackList track={this.props.playlistTracks} isRemoval={true} onRemove={this.props.onRemove} />
                <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default Playlist;