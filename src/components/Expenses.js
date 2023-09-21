import React, { useState } from 'react'
import './Expenses.css'
// import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'




const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2023')

  
  const filterChangeHandler = (selecterdYear) => {
    setFilteredYear(selecterdYear)
  }


  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear
  })


  return (
    <Card className='expenses'>    {/* ------------------------------------------------Card is Styled Wrapper components--------------------------------*/}
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        
        <ExpensesChart expenses={filteredExpenses}/>

        <ExpensesList items={filteredExpenses}/>

    {/* <ExpenseItem     title={props.items[0].title}    rupees={props.items[0].amount}     time={props.items[0].date}/>
        <ExpenseItem     title={props.items[1].title}    rupees={props.items[1].amount}     time={props.items[1].date}/>
        <ExpenseItem     title={props.items[2].title}    rupees={props.items[2].amount}     time={props.items[2].date}/>
        <ExpenseItem     title={props.items[3].title}    rupees={props.items[3].amount}     time={props.items[3].date}/> */}
      
    </Card>
  )
}

export default Expenses
