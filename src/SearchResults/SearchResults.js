import React from 'react';
import TrackList from './Tracklist';
import './SearchResults.css';
import App from './App';

class SearchResults extends React.Component {

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList onAdd={this.props.onAdd} tracks={this.state.searchResults} isRemoval={false} />
            </div>
        );
    }
}

export default SearchResults;