import React from "react";

class HogTile extends React.Component {
  state = {
    details: false
  }

  handleClick = (e) => {
    // this.setState({
    //   details: !this.state.details
    // })

    //when new state uses old state use functional statement
    //above is same as below
    this.setState((prevState) => {
      return {
        details: !prevState.details
      }
    })
  } 


  render() {
    // let {name, specialty, greased, weight} = this.props.hog
    //above is defactoring

    let imageName = this.props.hog.name.toLowerCase().split(" ").join("_")
    let pigImage = require(`../hog-imgs/${imageName}.jpg`)  

    return (
      <ul className='hogTile' onClick={this.handleClick}>
        <p>{this.props.hog.name}</p>
        <img src={pigImage} alt={this.props.hog.name}/>
        { this.state.details
          ?
            <div>
              <p>Weight: {this.props.hog.weight} kilograms</p>
              <p>Medal Won: {this.props.hog['highest medal achieved']}</p>
              <p>Greased: {this.props.hog.greased ? 'Greasy' : 'Clean'} </p>
            </div>
          :
            null
        }
      </ul>
    )
  }
}

export default HogTile;
