import React from "react";
const Presentational = ({onIncrementClick, counterVal}) => {
    return(
        <div>
            <button onClick={()=>onIncrementClick(counterVal)}> Test Button </button>
        </div>
    )
}

export default Presentational;