import React from 'react';
import './Jokes.css';

const UpdateJoke = (props) => {
  return (
    <div>      
      <button onClick={ () => props.updateJoke(props.id)} > 
        Update Joke 
        </button>
    </div>
  )
}

export default UpdateJoke;