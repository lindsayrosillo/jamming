import React from 'react';
import './TrackList.css';
import Track from './Track';

class TrackList extends React.Component {
    constructor(props) {
        super(props); 
        this.addTrack = this.addTrack.bind(this);
    }
    addTrack() {
        this.props.onAdd(this.props.track)
    }
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => 
                <Track track={track} onAdd={this.props.onAdd} /> )
            }
            </div>
        );
    }
}

export default TrackList;