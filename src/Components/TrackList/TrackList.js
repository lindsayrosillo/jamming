import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class Tracklist extends React.Component{
    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }

    render(){
        return(
        <div className="TrackList">
            {this.props.track.map(track =>
                {return <Track track={track} 
                onAdd={this.props.onAdd} 
                onRemove={this.props.onRemove} 
                isRemoval={true} />} )
            }
        </div>
        );
    }
}

export default Tracklist;