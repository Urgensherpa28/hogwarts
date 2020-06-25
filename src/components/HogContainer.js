import React, { Component } from 'react';
import HogTile from './HogTile'


const HogContainer = (props) => {
    let arrayOfHogs = props.hogsList.map(hog => <HogTile key={hog.id} hogItem={hog} />)

    return ( 
        <div>
            {arrayOfHogs}
        </div>
    )
}
 
export default HogContainer;