import React from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import ChangePigs from "./ChangePigs"

class App extends React.Component {
  state = {
    hogsList: [],
    howToRenderPigs: 'Alplhabetical'
  }

  changeHowToRenderPigs = (termFromTheChild) => {
    this.setState({
      howToRenderPigs: termFromTheChild
    })
  }

  decideWhichPigsToSendDown = () => {
    let theArrayToDisplay = this.state.hogsList
    if (this.state.howToRenderPigs === 'Alphabetical') {
      theArrayToDisplay = [...this.state.hogsList].sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (this.state.howToRenderPigs === 'Greased') {
      theArrayToDisplay = this.state.hogsList.filter((pig) => {
        return pig.greased
      })
    }
    if (this.state.howToRenderPigs === 'Non-Greased') {
      theArrayToDisplay = this.state.hogsList.filter((pig) => {
        return !pig.greased
      })
    }
    if (this.state.howToRenderPigs === 'Weight') {
      theArrayToDisplay = [...this.state.hogsList].sort((a, b) => {
        return a.weight - b.weight
      })
    }
    return theArrayToDisplay
  }
  
  componentDidMount() {
    //use fetch if data is coming from backend 
    this.setState({
      hogsList: hogs 
    })
  }

  render() {
    // console.log(this.state.hogsList)
    return (
      <div className="App">
        <Nav />
        <ChangePigs 
          changeHowToRenderPigs={this.changeHowToRenderPigs}
          howToRenderPigs={this.state.howToRenderPigs}
        />
        <HogContainer hogsList={this.decideWhichPigsToSendDown()}/>
      </div>
    )
  }
}

export default App;
