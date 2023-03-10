import React, { useState } from "react";
import Card from "../UI/Card";
//import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList items={filteredExpenses}/>
      <ExpensesChart expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
