import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enterExpenseData) => {  //----Callback Function ---Data getting from Down(ExpenseForm.js)-to-Top(here)-----------------------//
        const expenseData = {
            ...enterExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData)//----Data Passing from Down(here)-to-Top(App.js) for Callback Function-----------------------//
    }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense
