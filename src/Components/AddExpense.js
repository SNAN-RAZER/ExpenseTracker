
import React, { useState } from "react";
import { Container,Form,Button } from "react-bootstrap";
import ReactDOM from 'react-dom/client';
import '../Styles/AddExpense.css'

export const AddExpense=(props)=>{

   const [title,setTitle] =useState('');
   const [amount,setAmount] =useState(0);
   const [date,SetDate] =useState('');


   const handleAddExpense=()=>{
    const data={
        expenseName:title,
        amount:amount,
        purchaseDate:date
       };
       props.AddExpenseItem(data);
   }
   

   const handleCancelExpenseItem=()=>{
    props.showAddExpenseWindow(false);
   }
   return (
       <Container>
    <Form className="add-expense">
        <div className="content">
        <Form.Group className="mb-3" >
        <Form.Label>Expense Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the expense" 
        onChange={(e)=>setTitle(e.target.value)}
        />
       
    </Form.Group>

    <Form.Group className="mb-3" >
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="$0.0" 
         onChange={(e)=>setAmount(e.target.value)}
        />
    </Form.Group>
    <Form.Group className="mb-3" >
             <Form.Label>Date</Form.Label>
             <Form.Control type="date" placeholder="Select the expense Date" 
             min='1997-01-01'
             max='2022-12-31'
              onChange={(e)=>SetDate(e.target.value)}
             />

    </Form.Group>
        </div>
   

    <div className="buttons">
    <Button variant="outline-danger"
    
    >Cancel</Button>
    <Button variant="outline-primary" 
    onClick={handleAddExpense}
    >
        Add Expense
    </Button>
   
    </div>
    
    
    </Form>
       </Container>
   )
}