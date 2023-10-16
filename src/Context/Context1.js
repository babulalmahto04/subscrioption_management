import {createContext}from 'react';

//this is your context

let createContext1=createContext();

 let obj={name:"shashank",age:25,add:"c.g"}
function CreateContextProvider({children})
{
    return <createContext1.Provider value="{{obj}}">

        {children}

    </createContext1.Provider>
}
export default CreateContextProvider