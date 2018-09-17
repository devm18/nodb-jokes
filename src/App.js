import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import Jokes from './components/Jokes/Jokes';
import AddJoke from './components/Jokes/AddJoke';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: [],
      id: null,
      type: '',
      setup: '',
      punchline: '',
      author: ''
    }
  }

  addJoke = (joke) => {
    axios.post("/api/jokes", joke).then(() => {
      axios.get("/api/jokes").then(response => {
        console.log("addJoke: ", response.data);
        this.setState({ jokes: response.data });
      });
    });
  };

  handleChangeSetup = (e) => { 
    this.setState({ setup: e.target.value })
  };
  handleChangePunchline = (e) => { 
    this.setState({ punchline: e.target.value });
  };
  // handleChange = (e) => { 
  //   let keyName = e.target.name == 'setup' ? 'setup' : 'punchline';
  //   this.setState({ [ keyName ]: e.target.value })
  // };
  
  updateJoke = (id) => {
    axios.put(`/api/jokes/${id}`, 
    { setup: this.state.setup, punchline: this.state.punchline })
    .then(res => {
      console.log('editJoke: ', res.data);
      this.setState(
        { setup: this.state.setup, punchline: this.state.punchline }
      )
    })
  }

  deleteJoke = (id) => {
    axios.delete(`/api/jokes/${id}`)
    .then(res => {
    console.log("deleteJoke: res.data:", res.data);
    this.setState({ jokes: res.data });
    });
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
             <AddJoke 
             /// add joke 
             id={this.state.id}
             type={this.state.type}
             setup={this.state.setup} 
             punchline={this.state.punchline} 
             author={this.state.author}
             addJoke={this.addJoke}
             handleChangeSetup={this.handleChangeSetup}
             handleChangePunchline={this.handleChangePunchline}
             />
            
            <Jokes 
            /// display jokes
             jokesArr={this.state.jokes}
             /// update joke
             handleChangeSetup={this.handleChangeSetup}
             handleChangePunchline={this.handleChangePunchline}
             updateJoke={this.updateJoke}
             /// delete joke
             deleteJoke={this.deleteJoke}
             />
             
          </div>
      </div>
    );
  }
}
export default App;

