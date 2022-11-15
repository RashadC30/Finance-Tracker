import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addContent, setAddContent] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddContent(false);
  };

  const beginAddingHandler = () => {
    setAddContent(true);
  };

  const endAddingHandler = () => {
    setAddContent(false);
  };

  return (
    <div className="new-expense">
      {!addContent && (
        <button onClick={beginAddingHandler}> Add New Content</button>
      )}
      {addContent && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={endAddingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
