import React from "react";
import { useState, useContext } from "react";
import { MyContext } from "../Context/MyContextProvider";
import { Link , useNavigate } from "react-router-dom";
export const Header = () => {
  const Navigate = useNavigate();
  const [val, setVal] = useState();
  const { setFind, setClick } = useContext(MyContext);
  const HandleInput = (e) => {
    setVal(e.target.value);
  };
  const HandleClick = () => {
    // setFind((t) => [...t, val]);
    setFind(val);
    setClick(true);
    Navigate("/find")
  };
  return (
    <>
      <header>
        <Link to="/" className="home" >home</Link>
        <div className="searchBox">
          <input
            type="text"
            className="s_input"
            name="searchImg"
            placeholder="Search Image ..."
            defaultValue={val}
            onChange={HandleInput}
          />
          <button className="s_btn" onClick={HandleClick}>
            search
          </button>
        </div>
      </header>
    </>
  );
};
