import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextURL: '',
      previousURL: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
        this.setState({ nextURL: data.next });
        this.setState({ previousURL: data.previous });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    this.getCharacters(this.state.nextURL);
  }

  previousPage = () => {
    this.getCharacters(this.state.previousURL);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.previousPage} disabled={this.state.previousURL === null ? true : false} >{'<--'}</button>
        <button onClick={this.nextPage} disabled={this.state.nextURL === null ? true : false} >{'-->'}</button>
        <CharList chars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
