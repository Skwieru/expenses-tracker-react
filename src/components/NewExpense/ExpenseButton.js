import React from "react";

const ExpenseButton = (props) => {
  return (
    <>
      <button onClick={props.formHandler} className="new-expense__button">
        Add new Expense
      </button>
    </>
  );
};

export default ExpenseButton;
