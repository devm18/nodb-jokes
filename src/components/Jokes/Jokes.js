import React from 'react';
import Joke from './Joke';
import './Jokes.css'; 
import AddJoke from './AddJoke';

const Jokes = (props) => {

  console.log( props.jokes )
  let jokesDisplayed = props.jokesArr.map(joke => {
    return (
      <Joke
      /// display Joke
      id={ joke.id }
      type={ joke.type }
      setup={ joke.setup }
      punchline={ joke.punchline }
      author={ joke.author } 
      /// update Joke
      handleChangeSetup={props.handleChangeSetup}
      handleChangePunchline={props.handleChangePunchline}
      updateJoke={props.updateJoke}
      /// delete Joke 
      deleteJoke={props.deleteJoke}
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
