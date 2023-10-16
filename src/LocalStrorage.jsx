import React from "react";

function LocalStorage(){
    //responce from Api
    let obj={
        id:"shashanksagar9@gmail.com",
        pass:"12345678"

    }
    localStorage.setItem('res',JSON.stringify(obj));
    let x= JSON.parse(localStorage.getItem('res'));
    localStorage.setItem('res2',JSON.stringify(obj));

    //lovalStrorage.removeItem('res)
    localStorage.clear()
    console.log(x);

    return(
        <div>LocalStrorage</div>
    
        )
}
export default LocalStorage
