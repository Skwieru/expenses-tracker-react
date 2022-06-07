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
        <ExpenseItem
          id={props.expenses[0].id}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          id={props.expenses[1].id}
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          id={props.expenses[2].id}
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          id={props.expenses[3].id}
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </>
  );
};

export default Expenses;
