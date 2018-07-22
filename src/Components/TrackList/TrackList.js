import React from 'react';
import './TrackList.css';
import Track from './Track';

class TrackList extends React.Component{
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => 
                <Track track={track} /> )
            }
            </div>
        );
    }
}

export default TrackList;