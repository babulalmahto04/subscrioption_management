import React from "react"

function Updatedate({date}){
    const d = new Date(date);
    let monthName=d.toLocaleString('default',{month:'long'})

    let year=d.getFullYear()
    let da=d.getDate()
    console.log(monthName,year,da)  
    return(
        <div>
            <h1>{monthName}</h1>
            <h1>{year}</h1>
            <h1>{da}</h1>
        </div>
    )
}
export default Updatedate;