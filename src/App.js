import React, { Component } from 'react';
import './App.css';
import request from 'request';
import Formulaire from './components/Formulaire';
import DinoList from './components/DinoList';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinos : []
    };
  }
  componentDidMount() {
    request('http://localhost:8083/', (error, response, body) => {
      if(error) {console.log(error)}
      console.log(body);
      this.setState({
        dinos: JSON.parse(body)
      });
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Dinotopia</h1>
        <Formulaire/>
        <DinoList dinos={this.state.dinos}/>
      </div>
    );
  }
}

export default App;
