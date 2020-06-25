import React from "react";

class HogTile extends React.Component {
  state = {
    details: ''
  }

  showDetails = (e) => {
    // console.log(e)
    this.setState({
      details: 
      <div>
        <h3>Specialty: {this.props.hogItem.specialty}</h3>
        <h3>Greased: {this.props.hogItem.greased}</h3>
        <h3>Weight: {this.props.hogItem.weight}</h3>
      </div>
    })
  } 

  render() {
    let {name, specialty, greased, weight} = this.props.hogItem
    return (
      <div onClick={this.showDetails}>
        <h1>Name: {name}</h1>
        {this.state.details}
      </div>
    );
  }
}

export default HogTile;
