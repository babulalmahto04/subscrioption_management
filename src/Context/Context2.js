import { createContext } from "react";

let createContext2 = createContext()

function createContext2Provider({children})
{
    return<createContext2.Provider>
        {children}
    </createContext2.Provider>
}
 