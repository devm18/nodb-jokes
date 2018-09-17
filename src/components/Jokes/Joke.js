import React, { Component } from 'react';
import './Jokes.css';
import UpdateJoke from './UpdateJoke';
import DeleteJoke from './DeleteJoke';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    return (
      <section className="jokeContainer"> 

        {/* Display text OR editor view */}
        <span className="jokeCard">
          { 
          !this.state.editMode 
          ? <div>
              <p>{ this.props.setup } </p> 
              <p>{ this.props.punchline } </p>
            </div>
          : <div>
              setup: 
              <textarea
                placeholder={this.props.setup} 
                onChange={(e)=>this.props.handleChangeSetup(e)} >
                { this.props.setup }
              </textarea>
              <br />
              punchline: 
              <textarea
                placeholder={this.props.punchline}
                onChange={(e)=>this.props.handleChangePunchline(e)} >
                { this.props.punchline }
              </textarea>
            </div>
          }
        </span>

        <div className="menuButton">
          <button onClick={ this.toggleEditMode } > Edit </button>
          
          <UpdateJoke 
            id={this.props.id}
            handleChangeSetup={this.props.setup}
            handleChangePunchline={this.props.punchline}
            updateJoke={this.props.updateJoke}
            editMode={this.state.editMode}
          />

          <DeleteJoke 
            id={this.props.id}
            deleteJoke={this.props.deleteJoke}
          />
          
        </div>


      </section>
    )
  }
}

export default Joke;

