import { createContext, useEffect, useContext, useReducer } from "react";
import reducer from './TodoDataReducer';

let dummy = [
    // {
    //     date:"2023-05-23",
    //     id:777,
    //     amount: "0",
    //     title:"yearly sub"
    // }
]

export let TodoContext = createContext()
const initialSate = {
    inputedTodoDate: {},
    filterYear: "all",
    filterData: [],
    globalArr: [],

}

let TodoContextProvider = ({ children }) => {
    let [state, dispatch] = useReducer(reducer, initialSate)
    let arr = []
    // console.log("selected year test 1",state.filterYear);

    useEffect(() => {
        async function fetchData() {
            const url = "https://subcribiption-default-rtdb.firebaseio.com/sub.json"
            try {
                let data = await fetch(url);
                let res = await data.json()
                console.log('this is my res from firebase', res);
                for (let key in res) {
                    arr.push(res[key])
                }
                console.log('arr for backend', arr);
                dispatch({ type: "FETCH", payload: arr })
            }

            catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        dispatch({ type: "FILTER_DATA" })


    }, [state.filterYear, state.globalArr])

    let filterYearData = (selectedYear) => {
        console.log("selected year", selectedYear);
        return dispatch({ type: "SET_FILTER_YEAR", payload: selectedYear })
    }

    let setNewArray = (value) => {
        console.log("test value 2 for global array", value);
        return dispatch({ type: "SET_NEW_ARRAY", payload: value })
    }
    return (
        <TodoContext.Provider value={{ ...state, filterYearData, setNewArray }}>
            {children}
        </TodoContext.Provider>
    )

}

export const useTodoHook = () => {
    console.log("useTodoHook");
    return useContext(TodoContext)
}

export default TodoContextProvider;