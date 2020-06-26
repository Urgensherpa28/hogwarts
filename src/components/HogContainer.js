import React from 'react';
import HogTile from './HogTile'


let HogContainer = (props) => {
    let arrayOfHogs = props.hogsList.map((hog) => {
        return <HogTile key={hog.name} hog={hog} />
    })
    return ( 
        <div>
            {arrayOfHogs}
        </div>
    )
}
 
export default HogContainer;