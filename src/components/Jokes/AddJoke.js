import React, { Component } from 'react';

const AddJoke = (props) => {
  return (
    <section className="jokeContainer"> 
      <span className="jokeCard">
        <div>
          setup: 
          <textarea
            placeholder={props.setup} 
            onChange={(e)=> props.handleChangeSetupAdd(e)}
            >
            { props.setup }
          </textarea>
          <br />
          punchline: 
          <textarea
            placeholder={props.punchline}
            onChange={(e)=> props.handleChangePunchlineAdd(e)}
             >
            { props.punchline }
          </textarea>
        </div>
      </span>
      <div className="menuButton">
        <button onClick={ () => 
          props.addJoke({
            id: props.id,
            type: props.type,
            setup: props.setup, 
            punchline: props.punchline,
            author: props.author
            }) 
          } > Add Joke </button>
      </div>
    </section>
  )
}

export default AddJoke;