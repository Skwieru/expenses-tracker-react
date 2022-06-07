import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, changeEnteredTitle] = useState("");
  const [enteredAmount, changeEnteredAmount] = useState("");
  const [enteredDate, changeEnteredDate] = useState("");

  const handleTitle = (e) => {
    changeEnteredTitle(e.target.value);
    console.log(enteredTitle);
  };
  const handleAmount = (e) => {
    changeEnteredAmount(e.target.value);
  };
  const handleDate = (e) => {
    changeEnteredDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.saveExpenseFromData(expenseData);
    changeEnteredTitle("");
    changeEnteredAmount("");
    changeEnteredDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitle} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmount}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={handleDate}
          />
        </div>
        <button type="submit">Potwierdz</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
