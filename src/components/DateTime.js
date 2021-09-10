import React from "react";

const DataTime =()=>{
    const date = new Date()
    return(
        <div className="date-time">
            {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
        </div>
    )
}

export default DataTime; 