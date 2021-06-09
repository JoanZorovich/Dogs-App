import React from "react";
import { useDispatch } from "react-redux";
import { getAllBreeds } from "../../actions/actions";
import Filter from "../filter/filter";
import Order from "../order/order";
import SearchBar from "../searchbar/searchbar";
import "./sidebar.css";

function Sidebar() {
  
const dispatch = useDispatch();

  function handleReset() {
    dispatch(getAllBreeds());
  }

  return (
    <div className="sidebar">
    
      <ul>
        <li>
        <button onClick={handleReset} className="resetBotton">Reset</button>
          <SearchBar />
          <Filter />
          <Order />
       
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
