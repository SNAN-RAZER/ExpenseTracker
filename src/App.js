import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { AddExpense } from './Components/AddExpense';

function App() {

  let expenses=[
    {
      expenseName:"Car purchase",
      amount:"$10000",
      purchaseDate:'2022-04-13'
    },
    {
      expenseName:"Dinner",
      amount:"$13.3",
      purchaseDate:'2021-02-10'
    },
    {
      expenseName:"Laptop",
      amount:"$1000",
      purchaseDate:'2020-04-15'
    },
    {
      expenseName:"ipad",
      amount:"$700",
      purchaseDate:'2021-04-12'
    },
  ]

  const [data,setData]=useState(expenses);
  console.log(data);
  const [showAddExpenseWindow,setShowAddExpenseWindow]=useState(false);
  const AddExpenseItem=(expenseData)=>{
    console.log(expenseData);
    setData([expenseData,...data])
    
  };

  

  return (
    <div className="App">
      <AddExpense AddExpenseItem={AddExpenseItem} setShowAddExpenseWindow={setShowAddExpenseWindow}/>
    </div>
  );
}

export default App;
