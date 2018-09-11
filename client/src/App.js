// prototype to show express to reactjs

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  async callApi() {
      let response = await fetch('http://localhost:5000/api/hello', {
        method: 'GET',
        headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
        }
    });
      // console.log('resp is : '+response.headers.get('Content-Type'));
      let body = await response.json();
      // console.log('body is: '+body);
      if (response.status !== 200) throw Error(body.message);
      return body;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
