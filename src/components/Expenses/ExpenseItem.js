import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  
  function ClickHandler() {
    setTitle('Updated');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;