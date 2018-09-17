import React from 'react';
import './Jokes.css';

const DeleteJoke = (props) => {
  return (
    <div>
      <button onClick={ () => props.deleteJoke(props.id) } > 
      Delete Joke 
      </button> 
    </div>
  )
}

export default DeleteJoke;