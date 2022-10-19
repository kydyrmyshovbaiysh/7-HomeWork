import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [newTitle, setNewTitle] = useState("welcome");

//  let newTitle = 'welcome'
// let newTile = 'welcome to peaksoft'

  function changedTitle() {
    setNewTitle("Welcome to PeakSoft");
    console.log(newTitle);
  }

  // let title = props.expenseTitle;
  // let title = toilet paper

  // function changeHandler() {
  //   console.log(title);

  //   title = "Changed title";

  //   console.log(title);
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        {/* <h2>{props.expenseTitle}</h2> */}
        <h1>{props.expenseTitle}</h1>
        {/* title = changed title */}
        <div className="expense-item__price">${props.expensePrice}</div>
        {/* <button onClick={props.changeHandler}>Change title</button> */}
        <h1>{newTitle}</h1>

        <button onClick={changedTitle}>changed title </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
