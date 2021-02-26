import React, { Component } from "react";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Dani Acosta",
        address: {
          street: "San Antonio 29",
          zipCode: "10200",
          country: "Mexico",
        },
        email: "test@test.com",
      },
      deliveryMethod: "same day",
    };

    axios
      .post("/orders.json", order)
      .then((res) => {
        console.log(res);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  render() {
      let form = (
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          ></input>
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Your Street"
          ></input>
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Your Postal Code"
          ></input>
          <Button btnType="Success" clicked={this.orderHandler}>
            Order Now
          </Button>
        </form>
      );

      if (this.state.loading) {
          form = <Spinner />
      }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
