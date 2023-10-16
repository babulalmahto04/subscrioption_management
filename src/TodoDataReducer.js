function TodoDataReducer(state,action) {
    switch(action.type) {
        case "SET_NEW_ARRAY":
            return{
                ...state,globalArr:[...state.globalArr, action.payload]
            }
            case "FILTER_DATA":
                return{
                    ...state,filterData: state.globalArr.filter(detail => {
                        const date = new Date(detail.date)
                        console.log(detail);
                        if(date.getFullYear() === +state.filterYear){
                            return detail;
                        }else if(state.filterYear === 'all'){
                            return detail;
                        }
                    })
                }
              case "SET_FILTER_YEAR":
                return{
                    ...state,filterYear:action.payload
                }  
                default:
                    return state;
    }
}
export default TodoDataReducer;