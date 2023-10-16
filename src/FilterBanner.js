import React,{ useState} from "react";
import { useTodoHook } from "./TodoContext";

const FilterBannner = () => {
    const { filterYearData} = useTodoHook();


    // function selectYear (e) {
    //     selectYear(e.target.value);
    // }
    return(
        <div className="filter_ban">
            <h4 className="filter_a">Filter By Year</h4>
            <select className="select_y" onChange={(e)=>filterYearData(e.target.value)}>

                <option value="all">All</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    )
}
export default FilterBannner;