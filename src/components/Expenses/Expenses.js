import { React, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filterState, setFilterState] = useState("2020");
  const liftFilterState = (selectedYear) => {
    setFilterState(selectedYear);
    console.log(selectedYear, "from higher");
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterState}
          liftFilterState={liftFilterState}
        />
        {props.expenses.map((el) => (
          <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
