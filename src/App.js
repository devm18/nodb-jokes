import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Jokes from './components/Jokes/Jokes';


class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      userInput: ""
    }
  }
  
  componentDidMount() {
    axios.get('/api/jokes')
    .then(response => {
      console.log("componentDidMount: response.data:", response.data)
      this.setState({ jokes: response.data })
    })
    .catch(err=> console.log("Error in App.componentDidMount(): ", err));
  }
  // <Jokes jokesArr={this.state.jokes} />
  render() {
    
    // console.log("this.state.jokes:", this.state.jokes)
    return (
      <div className="App">
        <Header />
           <div className="jokesContainer">
             <Jokes jokesArr={this.state.jokes} />
          </div>
      </div>
    );
  }
}
export default App;


/* 
<Jokes 
id={ joke.id }
type={ joke.type }
setup={ joke.setup }
punchline={ joke.punchline }
author={ joke.author } 
/>
 */