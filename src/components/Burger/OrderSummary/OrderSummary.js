import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //This doesn't need to be a class component. We are using a class component just to 
  //use componentDidUpdate in order to debug.

  componentDidUpdate() {
    console.log("[OrderSummary] component did update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (iKey) => {
        return (
          <li key={iKey}>
            <span style={{ textTransform: "capitalize" }}>{iKey}</span>:{" "}
            {this.props.ingredients[iKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchasedCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchasedContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
