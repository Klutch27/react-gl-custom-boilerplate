import React, {Component} from 'react';
// regenerattor is to use ES6 arrow functions
import "regenerator-runtime/runtime";

// NOTE: I'd normally place this in a process.env file and hide it from GitHub.
// for the purpose of this take home, I'm leaving it here so it's easier to run the file.

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  
  // NOTE: on very first render, render() runs before componentDidMount. Need to handle that initial render for data fetching in component (e.g. return null or something)
  componentDidMount(){}

  // runs when component updates and compares previous props and prev state to current props and current state
  componentDidUpdate(prevProps, prevState){}

  render(){}

}

export default Home;