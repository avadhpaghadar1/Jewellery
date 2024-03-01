import React from "react";
import "./Card.css";
import DeleteDialog from "./DeleteDialog";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={props.image} alt="no images" />
        </div>
        <div className="card_description">
          <h5>
            <b>{props.name}</b>
          </h5>
          <p>{props.price}</p>
          <Button variant="outlined">
            Add to cart
            <AddShoppingCartIcon style={{ width: "13%" }} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;
