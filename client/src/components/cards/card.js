import React, { useState } from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";


export default function Card(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickCard = () => {
    setOpen(true);
  };

  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category,
  });


  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        cost={props.cost}
        category={props.category}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" >

        <div className="informations-card" onClick={()=>handleClickCard()}>
          <h4 className="card--title"> Nome do jogo: {props.name} </h4>
          <p className="card--cost"> Valor: {props.cost} </p>
          <p className="card--category"> Categoria: {props.category}</p>
        </div>
.
        {/* <div className="button-delete"  > */}
          {/* <Button className="button-delete" onClick={handleDeleteGame} >
            <DeleteIcon color="primary" />
          </Button> */}
        {/* </div> */}
      </div>
    </>
  );
}
