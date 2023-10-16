import React from "react";
import Updatedate from "./Updatedate";
import "./Banner.css";
import { useTodoHook } from "./TodoContext";

function Banner() {
  let { filterData: filteredDataBasedOnYear } = useTodoHook();

  return (
    <div>
      <div>
        {filteredDataBasedOnYear.length > 0 ? (
          filteredDataBasedOnYear &&
          filteredDataBasedOnYear.map((data) => {
            return (
              <div className="datas" key={data.id}>
                <div className="date_d">
                  <Updatedate date={data.date} />
                </div>
                <div className="title_a ">
                  <h1>{data.title}</h1>
                </div>

                <div className="amnt_a">
                  <h5 className="amnt_d">${data.amount}.00</h5>
                  <p className="ct">ChangeTitle</p>
                </div>
              </div>
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>No data Available</h3>
        )}
      </div>
    </div>
  );
}
export default Banner;

//js for logic
//jsx for rendering
