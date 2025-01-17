import React, { Component } from 'react';
import './App.css';
import { getUrls, postRequest } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => this.setState({ urls: data.urls}))
    .catch(err => console.error('Error fetching:', err));
  }

  addNewUrl = (data) => {
    postRequest(data)
    .then(data => this.setState({ urls: [...this.state.urls, data]})
    )
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewUrl={this.addNewUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
