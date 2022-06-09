import { React, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseButton from "./ExpenseButton";
import "./NewExpense.css";

const NewExpense = (props) => {
  // states
  const [isFormActive, SetIsFormActive] = useState(true);

  // funcions
  const formHandler = () => {
    SetIsFormActive(!isFormActive);
  };

  const saveExpenseFormData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.getFormExpense(expenseData);
    SetIsFormActive(false);
  };
  return (
    <div className="new-expense">
      {!isFormActive && <ExpenseButton formHandler={formHandler} />}
      {isFormActive && (
        <ExpenseForm
          saveExpenseFromData={saveExpenseFormData}
          formHandler={formHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
