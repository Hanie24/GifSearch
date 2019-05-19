import React, { Component } from 'react';
import axios from 'axios'
import SearchGif from './Components/SearchGif';
import GroupList from './Components/GroupList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        gifs: []
    }
  }

  handleTermChange = term => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=ARtP9DJRiCPQj5xqCcQyB24RTZUF9Rbd`;
    
    axios.get(url)
      .then(response => this.setState({ gifs: response.data.data }))
  }

  render() {
    return (
      <div className="App">
       <SearchGif onTerm={term => this.handleTermChange(term)}/>
       <GroupList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;