import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/card";
import Header from "./components/header/header";
import CurrencyFormat from 'react-currency-format';

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState()
  console.log('list', listGames)

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => console.log("response", response));
    window.location.reload();
  };


  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data);
    });
  }, []);

  return (
    <div className="app--container">
      <Header />

      <div className="register--container">
        <h1 className="register-title"> Adicione um jogo </h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleChangeValues}
        />

        <input
          type="number"
          name="cost"
          placeholder="Preço"
          className="register--input"
          onChange={handleChangeValues}
        />
        {/* <CurrencyFormat
          type="text"
          name="cost"
          placeholder="Preço"
          className="register--input"
          prefix={"R$ "}
          thousandSeparator="."
          decimalSeparator=","
          onChange={handleChangeValues}
          defaultValue={values}
          decimalScale={values && 2}
          fixedDecimalScale={values}
        /> */}
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="register--input"
          onChange={handleChangeValues}
        />
        <button
          className="register--button"
          onClick={() => handleClickButton()}
        >
          {" "}
          Cadastrar{" "}
        </button>
      </div>
      <>
        <div className="card--information">
          {typeof listGames !== "undefined" &&
            listGames.map((value) => {
              return (
                <Card
                  key={value.id}
                  listCard={listGames}
                  setListGames={setListGames}
                  id={value.id}
                  name={value.name}
                  cost={value.cost}
                  category={value.category}
                />
              );
            })}
        </div>
      </>
    </div>
  );
}

export default App;
