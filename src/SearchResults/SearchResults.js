import React from 'react';
import TrackList from './Tracklist';
import './SearchResults.css';
import App from './App';

class SearchResults extends React.Component {

    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.state.searchResults} />
            </div>
        );
    }
}

export default SearchResults;