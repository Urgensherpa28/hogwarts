import React from "react"



const GreasedFilterButton = (props) => {


    const handleFilter = (e) => {
        props.filterFunction()
    }

    return ( 
        <button onClick={handleFilter}> Filter </button>
     );
}


export default GreasedFilterButton