import { React, useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilterState] = useState("all-items");
  const liftFilterState = (selectedYear) => {
    setFilterState(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    if (filteredYear === "all-items") {
      return true;
    } else return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          liftFilterState={liftFilterState}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
