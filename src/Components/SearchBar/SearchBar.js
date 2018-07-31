import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        
    }
    search() {
        this.props.onSearch(this.state.searchTerm);
    }
    handleTermChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.search();
        }
    }

    updateInput(term, query) {
        this.setState({ [term]: query});
        localStorage.setItem(term, query);
    }

    render() {
        return (
        <div className="SearchBar">
            <input onChange={this.handleTermChange} onKeyUp={this.handleKeyPress.bind(this)} placeholder="Enter A Song, Album, or Artist" />
            <a onClick={this.search}>SEARCH</a>
        </div>
        );
    }
}

export default SearchBar;