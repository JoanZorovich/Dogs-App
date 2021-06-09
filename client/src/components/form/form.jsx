import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../actions/actions";
import axios from "axios";
import "./form.css";

function Form() {
  const [data, setData] = useState({
    name: "",
    weight: "",
    height: "",
    life_span: "",
    temperament: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const temperaments = useSelector((state) => state.temperaments);

  function handleInputChange(event) {
    //console.log(event.target.value)//estamos al pendiente del valor del input
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); //evitar el procesamiento automatico de los formularios// si le doy enviar lo hace por el metodo get y no va a tomar nada
    //console.log(data.weight)

    axios
      .post("http://localhost:3001/dog", data)
      .then((r) => {
        alert("Breed created successfully!");
        setData({
          name: "",
          height: "",
          weight: "",
          life_span: "",
          temperament: [],
        });
      })
      .catch((res) => alert("Something went wrong. Please try again."));
  }

  function handleSelect(e) {
    if (data.temperament.includes(parseInt(e.target.value))) {
      alert("You already selected this temperament");
    } else {
      setData((prev) => ({ ...prev, temperament: [...prev.temperament, parseInt(e.target.value)],}));
    }
  }

  function deleteTemp(e, t) {
    setData((prev) => ({
      ...prev,
      temperament: prev.temperament.filter((temp) => temp !== parseInt(t)),
    }));
  }

  function getNames(arr) {
    let names = [];
    temperaments.forEach((t) => {
      arr.forEach((id) => {
        if (parseInt(id) === t.id) {
          names.push(t.name);
        }
      });
    });
    console.log(names)
    return names;
  }

  return (
    <div className="contenedor">
      <h2>Yay, Here you can create a breed as you want!!</h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="titleForm">
          <p className="">Name</p>
          <input
            placeholder="Type breed name"
            type="text"
            name="name"
            onChange={handleInputChange}
            className="inputForm"
            required
          ></input>
        </div>

        <div className="titleForm">
          <p className="">Weight</p>
          <input
            placeholder="Type a weight range"
            type="text"
            name="weight"
            onChange={handleInputChange}
            className="inputForm"
            required
          ></input>
        </div>

        <div className="titleForm">
          <p className="">Height</p>
          <input
            placeholder="Type a height range"
            type="text"
            name="height"
            onChange={handleInputChange}
            className="inputForm"
            required
          ></input>
        </div>

        <div className="titleForm">
          <p className="">Life Span</p>
          <input
            placeholder="Type a life span range"
            type="text"
            name="life_span"
            onChange={handleInputChange}
            className="inputForm"
          ></input>
        </div>

        <div className="titleForm">
          <p className="">Temperaments</p>
          <select
            className=""
            name="temperaments"
            onChange={handleSelect}
            required
            value={data.temperament}
          >
            <option>Select</option>

            {temperaments.map((e) => (
              <option value={e.id} key={e.id}> {e.name}</option>))}
          </select>
        </div>
        
        <div className="tempbox">
        {
           data.temperament.map(t => (
            <p id={t} className="temperament">{getNames([t])} <button type='button' className="tempButton" onClick={(e) => deleteTemp(e, t)}>x</button></p>
            ))
          }

        </div>

        <div className="buttonform">
          <button className="" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
