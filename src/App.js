import React, { useState } from "react";
import Form from "./Form";
import Banner from "./Banner";
import FilterBanner from "./FilterBanner";
import Charts from "./Charts";
// import Logo from "./Logo";
import Pops from './Pops'
import TodoContextProvider from "./TodoContext";


function App() {

  return (
    <div>
      <TodoContextProvider>
        <Form />
        <FilterBanner />
        <Charts />
        <Banner />
      </TodoContextProvider>
    </div>
  )
  // let Arr = [];
  // let [globalArr, setGlobalArr] = useState([]);
  // let [selectedYear, setSelectedYear] = useState('all');

  // console.log();
  // console.log("global", globalArr);

  // const filteredDataBasedOnYear = globalArr.filter(detail => {
  //   const date = new Date(detail.date)
  //   console.log(selectedYear);
  //   if(date.getFullYear() === +selectedYear){
  //     return detail
  //   } else if(selectedYear==='all'){
  //     return detail
  //   }
  // })




  // // console.log(globalArr)
  // // console.log(filteredDataBasedOnYear)
  // return (
  //   <div>
  //     <Form setGlobalArr={setGlobalArr} />
  //     <FilterBanner setSelectedYear={setSelectedYear}/>
  //     <Charts globalArr={filteredDataBasedOnYear}/>
  //     <Banner filteredDataBasedOnYear={filteredDataBasedOnYear}  /> 
  //     {/* <Pops/> */}
  //     {/* <Logo/> */}
  //     {/* <Test /> */}
  //   </div>
  // );
};
export default App;