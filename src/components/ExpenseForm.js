import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
 const [enterTitle, setEnterTitle] = useState('')
 const [enterAmount, setEnterAmount] = useState('')
 const [enterDate, setEnterDate] = useState('')


    const handleTitle = (event)=>{
        setEnterTitle(event.target.value)
    }
    const handleAmount = (event)=>{
        setEnterAmount(event.target.value)
    }
    const handleDate = (event)=>{
        setEnterDate(event.target.value)
    }



    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {  //-----------------------------------Work like PAYLOAD----------------------------------------//
            title : enterTitle,
            amount : enterAmount,
            date : new Date(enterDate)
        }
        props.onSaveExpenseData(expenseData) //----Data Passing from Down(here)-to-Top(via NewExpense.js to App.js) for Callback Function-----------------------//
        
        setEnterTitle(''); //-------Used to Empty the form after submision------------//
        setEnterAmount('');//-------Used to Empty the form after submision------------//
        setEnterDate('');  //-------Used to Empty the form after submision------------//
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enterTitle} onChange={handleTitle} />   {/*----------difficult method,----Need eventHandler------------------- */}      
                {/* <input type='text' value={enterTitle} onChange={(event)=>setEnterTitle(event.target.value)} /> */} {/*---My Easy Method, No need eventHandler------- */} 

            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'  value={enterAmount} min='0.01' step='0.01'onChange={handleAmount} /> {/*----------difficult method,-----Need eventHandler------------------- */} 
                {/* <input type='number'  value={enterAmount} min='0.01' step='0.01'onChange={(event)=>setEnterAmount(event.target.value)} /> */}{/*---My Easy Method, No need event Handler------- */} 
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'  value={enterDate} min='2023-01-01' max='2030-12-31' onChange={handleDate} /> {/*---------difficult method,-------Need eventHandler------------------- */}
                {/* <input type='date'  value={enterDate} min='2023-01-01' max='2030-12-31' onChange={(event)=>setEnterDate(event.target.value)} /> */}{/*---My Easy Method, No need event Handler------- */}
            </div>
        </div>

        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
        </div>      
    </form>
  )
}

export default ExpenseForm
