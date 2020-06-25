import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import GreasedFilterButton from "./GreasedFilterButton"

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

  greasedFilter = () => {
    //this returns an array 5 greased hogs 
    let originalArray = this.state.hogsList
    let filteredArray = originalArray.filter(hog => {
      return hog.greased === true
    })
    console.log(filteredArray)
    // set state hogsList to the above array
    this.setState ({
      hogsList: filteredArray
    })
  }

  render() {
    // console.log(this.state.hogsList)
    return (
      <div className="App">
        <Nav />
        <GreasedFilterButton 
        filterFunction = {this.greasedFilter}
        />
        <HogContainer hogsList={this.state.hogsList}/>
      </div>
    );
  }
}

export default App;
