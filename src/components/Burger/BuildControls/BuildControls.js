import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((c) => (
      <BuildControl
        key={c.label}
        label={c.label}
        added={() => props.ingredientAdded(c.type)}
        removed={() => props.ingredientRemoved(c.type)}
        disabled={props.disabled[c.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      Order Now
    </button>
  </div>
);

export default BuildControls;
