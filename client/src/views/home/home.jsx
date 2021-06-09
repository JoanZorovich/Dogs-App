import React, { useEffect, useState } from "react";
import Card from "./../../components/card/card";
import { useDispatch, useSelector } from "react-redux";
import { getAllBreeds} from "../../actions/actions";
import Sidebar from "./../../components/sidebar/sidebar";
import "./home.css";

function Home() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.allBreeds);
  const [max, setMax] = useState(breeds.length-8);



  function next() {
    page < max && setPage(page + 8);
  }

  function back() {
    page > 0 && setPage(page - 8);
  }


  useEffect(() => {
    dispatch(getAllBreeds());
  }, []);

  useEffect(() => {
   setMax(breeds.length-8)
   setPage(0);
  }, [breeds]);

  console.log(breeds[0]);
  console.log(breeds)
  return (
    <div className="all">
      <Sidebar />
      <div className="cardContainer">
        <div class="cards">
          {breeds &&
            breeds
              .slice(page, page + 8)
              .map((breed) => (
                <Card
                  id={breed.id}
                  name={breed.name}
                  img={breed.img}
                  temp={breed.temperament}
                />
              ))}
        </div>
        <div className="buttonContainer">
          <button className="buttonBack" onClick={back}>Back</button>
          <button className="buttonNext" onClick={next}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
