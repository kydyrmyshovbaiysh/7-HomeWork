import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [choose, setChoose] = useState({
    value: "",
  });

  function changeHandler(event) {
    console.log(event);

    // console.log((props.expenses[0].title = "Just Paper"));
  }

  const chooseYearsHandler = (event) => {
    setChoose({ value: event.target.value });
  };
  console.log(choose.value);
  props.yearsAgo(choose.value)

  return (
    <Card className="expenses">
      <div className="selects">
        <div className="filters">Filter by year</div>
        <select className="select" onChange={chooseYearsHandler}>
          <option value="All">All</option>
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      {props.expenses().map((item) => {
        return (
          <ExpenseItem
            expenseTitle={item.title}
            expensePrice={item.amount}
            expenseDate={item.date}
            // changeHandler={changeHandler}
            key={item.id}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
