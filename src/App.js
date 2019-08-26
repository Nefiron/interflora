import React, { Component } from 'react';
import logo from './logo.svg'
import Form from './components/form'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="header">
            <img src={logo} />
            <h1>Dine Hilsner!!!</h1>
          </header>
          <Form dataFeed={this.updateData}/>
        </div>
      </div>
    );
  }
}

export default App;
