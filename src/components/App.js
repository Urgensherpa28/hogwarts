import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    hogsList: []
  }

  componentDidMount() {
    this.setState({
      hogsList: hogs 
    })
    // console.log(this.state.hogsList)
  }

  render() {
    // console.log(this.state.hogsList)
    return (
      <div className="App">
        <Nav />
        <HogContainer hogsList={this.state.hogsList}/>
      </div>
    );
  }
}

export default App;
