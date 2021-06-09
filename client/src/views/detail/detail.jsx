import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreedDetail } from "../../actions/actions";
import "./detail.css";
import dog from "./dog.png";

function Detail(props) {
  const dispatch = useDispatch();

  const id = props.match.params.id;
  const breed = useSelector((state) => state.breedDetail);

  useEffect(() => {
    dispatch(getBreedDetail(id));
  }, []);


  if (id.includes("-")) {
    return (
      <div className="detailContainer">
        <div className="titleContainer">
          <p className="detailTitle">{breed?.name}</p>
        </div>

        <div className="imgtext">
          <div className="imgcontainer">
            <img src={dog} className="imgDetail" alt="dog" />
          </div>

          <div className="detailText">
            <p className="generalText">Temperament/s:</p>
            <div className="">
              {breed.temperaments &&
                breed.temperaments.map((t) => {
                  return <p className=''>{t.name},</p>;
                })}
            </div>
            <p className="">{breed?.temperament}</p>
            <p className="generalText">Height:</p>
            <p className="">{breed?.height} cm</p>
            <p className="generalText">Weight:</p>
            <p className="">{breed?.weight} kg</p>
            <p className="generalText">Life Span:</p>
            <p className="">{breed?.life_span} years</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="detailContainer">
        <div className="titleContainer">
          <p className="detailTitle">{breed[0]?.name}</p>
        </div>

        <div className="imgtext">
          <div className="imgcontainer">
            <img src={breed[0]?.image} className="imgDetail" alt="dog" />
          </div>

          <div className="detailText">
            <p className="generalText">Temperament/s:</p>
            <p className="">{breed[0]?.temperament}</p>
            <p className="generalText">Height:</p>
            <p className="">{breed[0]?.height} cm</p>
            <p className="generalText">Weight:</p>
            <p className="">{breed[0]?.weight} kg</p>
            <p className="generalText">Life Span:</p>
            <p className="">{breed[0]?.life_span}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
