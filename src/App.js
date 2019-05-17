import React, { Component } from 'react';
import SearchGif from './Components/SearchGif';
import './App.css';

class App extends Component {
  handleTerm(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="App">
        <SearchGif onTerm={this.handleTerm}/>
      </div>
    );
  }
}

export default App;
