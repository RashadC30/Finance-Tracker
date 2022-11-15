import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Data = [
  { id: "e1", title: "New TV", amount: 840.32, date: new Date(2021, 11, 25) },
  {
    id: "e2",
    title: "Mahogany Dresser",
    amount: 157.48,
    date: new Date(2022, 2, 20),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 174.15,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "Apple Watch",
    amount: 332.68,
    date: new Date(2022, 4, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
