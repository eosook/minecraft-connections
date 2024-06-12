import "./CardList.scss";
import Card from "./Card/Card";
import Buttons from "./Buttons/Buttons";
import Connection from './Connection/Connection'
import { useState, useEffect } from "react";
import axios from "axios";

function CardList() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const BASE_URL = "http://localhost:5050";

  useEffect(() => {
    async function getData() {
        const response = await axios.get(BASE_URL);
        setIngredientsList(response.data);
    }
    getData();
  }, [])

  useEffect(() => {
    if (isConnected){
        window.alert(`Good Job ${selected[0].connection}`)
    }
  }, [isConnected]);

  function clickHandler(ingredient) {
    if (selected.length >= 3) {
        return
    } else {
        setSelected((prev) => ([...prev, ingredient]));
        console.log(selected);
    }
  };

  function submitHandler(){
    let ingredient1 = selected[0].connection
    let ingredient2 = selected[1].connection
    let ingredient3 = selected[2].connection
    if (ingredient1 === ingredient2 && ingredient1 === ingredient3) {
        setIsConnected(true);
    } else {
        setSelected([])
    }
  };

  function clear(){
    setSelected([]);
    console.log(selected);
  }

  // })
  return (
    <main>
      <div className="cardList">
        {ingredientsList.map((ingredient) => {
          return (
            <Card
                ingredient={ingredient}
                key={ingredient.id}
              onClick={clickHandler}
              selected={selected}
              isConnected={isConnected}
              clear={clear}
              setIsConnected={setIsConnected}
            />
          );
        })}
        {/* <Connection connections={connections}/> */}
      </div>
      <Buttons clear={clear} onClick={submitHandler} selected={selected}/>
    </main>
  );
}

export default CardList;
