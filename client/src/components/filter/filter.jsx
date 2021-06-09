import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, filteredBreed } from "../../actions/actions";

import "./filter.css";

function Filter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const temperaments = useSelector((state) => state.temperaments);
  const breeds = useSelector((state) => state.allBreeds);

  let [temp, setTemp] = useState([]);

  function handleSelect(e) {
    setTemp(e.target.value);
  }

  function handleClick() {
    let dogs = [];

    for (let breed of breeds) {
      if (breed.temperament && breed.temperament.includes(temp)) {
        dogs.push(breed);
      }
      if (breed.temperaments) {
        breed.temperaments.map((t) =>
          t.name === temp ? dogs.push(breed) : null
        );
      }
    }

    dispatch(filteredBreed(dogs));
  }

  function handletwo(e) {
    let dogs = [];
    let dogs2=[];

    for (let breed of breeds) {
      if (typeof breed.id === 'string' && e.target.value) {
        dogs.push(breed);
      // } else{
      //   dogs.push(breed)
      // }
    }
    // console.log(e.target.value)
    // console.log(dogs)
    // console.log(dogs2)
    dispatch(filteredBreed(dogs));
  }
}

  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log(temp)
  return (
    <div className="mainFilter">
      <h3>FILTER</h3>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="">
          <p className="">Temperaments</p>
          <select className="" name="temperaments" onChange={handleSelect}>
            <option>Select</option>
            {temperaments.map((e) => (
              <option value={e.name} key={e.id}>
                {e.name}
              </option>
            ))}
          </select>
          <div className="btnContainer">
            <button onClick={() => handleClick()} className="button">
              Filter
            </button>
          </div>
        </div>
      </form>
      <form className="formContainer">
        <div className="">
          <p className="">Created or existing Breed</p>
          <select className="" name="temperaments" onChange={handletwo}>
            <option>Select</option>
            <option value={false}>Created</option>
            <option value={true}>Existing</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filter;
