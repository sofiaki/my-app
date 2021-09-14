import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table';
import Form from './form';
//git token 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
class App extends React.Component{
  state = {
    characters : [],
  }
  removeCharacter = (index)=>{
    const {characters}= this.state
    this.setState({
      characters : characters.filter((characters,i)=>{
        return i !== index
      }),
    }) 
  }
  
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render(){
    const {characters}= this.state
    
    return(
      <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form  handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

