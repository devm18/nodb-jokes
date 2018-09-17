import React, { Component } from 'react';
import './Joke.css';
// import Edit from './Edit/Edit';

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      showMenu: false
    };
  }

  render() {
    return (
      <section className="jokeContainer">
        <span className="jokeCard"> { this.props.joke.id } </span>
        <span className="editMenu"> Menu </span>

  
      </section>
    )
  }
}

