import React, { useState } from 'react'
// import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense'


const INITIAL_DATA = [
  // {id:'1',title:'', amount: '', date: new Date()},     //------array index 0 -------------//
  // {id:'2',title:'', amount: '', date: new Date()},  //------array index 1 -------------//
  // {id:'3',title:'', amount: '', date: new Date()}, //------array index 2 -------------//
  // {id:'4',title:'', amount: '', date: new Date()}//------array index 3 -------------//                   
]

// {id:'1',title:'House Rent', amount: 15000, date: new Date(2023,2,7)},     //------array index 0 -------------//
// {id:'2',title:'Electricity', amount: 3000, date: new Date(2023,6,10)},  //------array index 1 -------------//
// {id:'3',title:'Health Insurance', amount: 4000, date: new Date(2023,9,11)}, //------array index 2 -------------//
// {id:'4',title:'Others', amount: 10000, date: new Date(2023,10,5)}//------array index 3 -------------//



const App = () => {


  const [expenses, setExpenses] = useState(INITIAL_DATA)
    

    const addExpenseHandler = (expense) => { //----Callback Function ---Data getting from Down(NewExpense.js)-to-Top(here)-----------------------//
      setExpenses((prevExpenses)=>{
        return[expense, ...prevExpenses]
      })
    }             

// ------------------------------------------------TYPE-I----(Good / Easy to Understand)---------------------------------------------------------------//
return (
   <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>     
    </div>
  )
}
export default App;


