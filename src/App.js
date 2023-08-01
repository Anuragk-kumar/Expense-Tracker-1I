import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

const App = () => {
  // Assuming you have expenses data available here
  // Replace the sample data below with your actual data
  const expenses = [
    { id: 1, text: "Expense 1", amount: -100 },
    { id: 2, text: "Income 1", amount: 200 },
    // Add more expenses here
  ];

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm />
        <div className="expenseContainer">
          <ExpenseInfo />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
};

export default App;
