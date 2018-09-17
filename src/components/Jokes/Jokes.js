import React from 'react';
import Joke from './Joke/Joke';
import './Jokes.css'; 

function Jokes(props) {
  console.log( props.jokes )
  let jokesDisplayed = props.jokes.map(joke => {
    return (
      <Joke 
        id={ joke.id }
        type={ joke.type }
        setup={ joke.setup }
        punchline={ joke.punchline }
        author={ joke.author }
        updatejokeFn={ this.updatejoke }
        deleteJokeFn={ this.deletejoke } />
    )
  })
  return (
    <div className="jokesDisplayContainer">
      { jokesDisplayed }
    </div>
  );
}

export default Jokes; 