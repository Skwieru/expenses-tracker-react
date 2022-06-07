import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseFormData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.getFormExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseFromData={saveExpenseFormData} />
    </div>
  );
};

export default NewExpense;
