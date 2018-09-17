import React from 'react';
import Joke from './Joke/Joke';
import './Jokes.css'; 

function Jokes(props) {
  console.log( props.jokes )
  let jokesDisplayed = props.jokesArr.map(joke => {
    return (
      <Joke
      id={ joke.id }
      type={ joke.type }
      setup={ joke.setup }
      punchline={ joke.punchline }
      author={ joke.author } 
      />
    )
  })

  return (
    <div className="jokesContainer">
      { jokesDisplayed }
    </div>
  );
}

export default Jokes; 

/* 

// properties to add to Joke component
updatejokeFn={ this.updatejoke } 
deleteJokeFn={ this.deletejoke } 

*/