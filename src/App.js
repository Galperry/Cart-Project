import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  changeCount = (count) => {
    this.setState({count})
  }
  
  render() {
    return (
      <div>
          <Header count={this.state.count}/>
          <Main changeCount={this.changeCount}/>
      </div>
    );
  }
}

export default App;
