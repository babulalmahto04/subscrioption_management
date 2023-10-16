import React, { useState, useEffect, useContext } from "react";
import "./Form.css";
import Overlay from "./Overlay";
import Pops from "./Pops";
import { createPortal } from "react-dom";
import { useTodoHook } from "./TodoContext";

const Form = () => {
  const url="https://subcribiption-default-rtdb.firebaseio.com/sub.json"
  const {globalArr, setNewArray} = useTodoHook()
  // const a =useTodoHook();
  // console.log(a);
  // let a=useContext(TodoContext)
  // console.log(a);
  
  let [formdata, setFormData] = useState({ title: "", date: "", amount: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isPopVisible, setIsPopVisible] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  let [titleError, setTitleError] = useState(false);
  let [amountError, setAmountError] = useState(false);

  function commonHandler(event) {
    setFormData((pre) => {
      return { ...pre, [event.target.name]: event.target.value };
    });
  }
  const handleBlur = (event) => {
    if (event.target.value.lenght < 3) {
      setTitleError(true);
      setAmountError(true);
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  };
  const handelFocus=()=>{
    console.log("hi");
  }

  useEffect(() => {
    let x = setTimeout(() => {
      if (formdata.title.trim().length > 0) {
        setTitleError(false);
      }
      if (formdata.amount.trim().length > 0) {
        setAmountError(false);
      }
      console.log("hi am useEffect");
    }, 1000);
    return () => {
      clearTimeout(x);
    };
  }, [formdata.title, formdata.amount]);

  const isValidate = (data) => {
    if (data.title.trim() === "") {
      console.log("=== kkk data.title");
      setTitleError(true);
      return false;
    }
    if (data.amount.trim() === "") {
      console.log("=== kkk data.title");
      setAmountError(true);
      return false;
    }

    setTitleError(false);
    setAmountError(false);
    return true;
  };

   async function onSubmitHandler() {
    console.log("jjj", !isValidate(formdata));
    if (!isValidate(formdata)) {
      setIsFormValid(false);
      setIsPopVisible(true);
      return;
    } else if (formdata.title.trim().length === 0) {
      setTitleError(true);
      return;
    }
    console.log("formis valid", isFormValid);
    if (!isFormValid) {
      console.log("=== formisValid");
      setIsPopVisible(true);
      return;
    }
    console.log("jaljlaj");

    let obj = {
      id: new Date().getMilliseconds(),
      title: formdata.title,
      date: formdata.date,
      amount: formdata.amount,
    };
    // firebase
    try {
      let res = await fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{"Content-Type":"application/json"}


      })
      if(res.status==200)
      {
        let data= await res.json()
      }
      else {
        throw new Error('something went wrong')
      }
    }
    catch(e){
      console.log(e) 
    }


    setNewArray(obj);
    setIsFormValid(true);

    setFormData({
      title: "",
      data: "",
      amount: "",
    });
    setIsFormVisible(false);
  }
  console.log(formdata);
  let style = titleError ? "inp_title error" : "inp_title";
  let style1 = amountError ? "inp_amount error" : "inp_amount";
  // let style2 =isFormValid ? "inp_data error" : "inp_date"

  console.log(style, "styled");

  // const validate = (formdata) =>{
  //   if(formdata.title == "" && formdata.amount == "")
  //   {
  //  return false
  //   }
  //   return true
  // }

  // function onSubmitHandler() {
  //   if(!validate(formdata)){
  //     setIsPopVisible(true)
  //     return

  //   }

  //   setStore((...pre) => {
  //     return [...pre, obj];
  //   });
  //   setGlobalArr((prev) => [...prev, obj]);

  // }
  // console.log(formdata);
  return (
    <>
      <button
        onClick={() => setIsFormVisible((prev) => !prev)}
        className="hide_btn"
      >
        {"SHOW"}
      </button>
      {isFormVisible && (
        <div className="main">
          {isFormVisible && (
            <div>
              <div>
                <div className="title">
                  <label> Title</label>
                  <br />
                  <input
                    type="text"
                    className={style}
                    placeholder="title"
                    onChange={commonHandler}
                    name="title"
                    value={formdata.title}
                    onBlur={handleBlur}
                    onFocus={handelFocus}
                  />
                </div>

                <div className="date">
                  <label className="xd">Date</label>
                  <br />
                  <input
                    type="date"
                    placeholder="date"
                    onChange={commonHandler}
                    name="date"
                    value={formdata.date}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="amount">
                <label>Amount</label>
                <br />

                <input
                  type="number"
                  className={style1}
                  placeholder="enter amount"
                  onChange={commonHandler}
                  name="amount"
                  value={formdata.amount}
                  onBlur={handleBlur}
                />
                <br />
              </div>
            </div>
          )}

          <div>
            {isFormVisible && (
              <div className="button">
                <button className="cancel" onClick={onSubmitHandler}>
                  Cancel
                </button>
                <button className="save" onClick={onSubmitHandler}>
                  save
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <button onClick={() => setIsFormVisible((prev) => !prev)} className="add">
        {" "}
        {isFormVisible ? "HIDE" : "SHOW"}
      </button>

      {isPopVisible && (
        <div>
          <Overlay setIsPopsupVisible={setIsPopVisible} />

          {createPortal(
            <Pops data={formdata} setIsPopsupVisible={setIsPopVisible} />,
            document.getElementById("through-portal")
          )}

          <Pops data={formdata} setIsPopsupVisible={setIsPopVisible} />
        </div>
      )}
    </>
  );
};
export default Form;
