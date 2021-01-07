import React from "react";

import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((iKey) => {
    return (
      <li key={iKey}>
        <span style={{ textTransform: "capitalize" }}>{iKey}</span>:{" "}
        {props.ingredients[iKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchasedCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchasedContinue}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
