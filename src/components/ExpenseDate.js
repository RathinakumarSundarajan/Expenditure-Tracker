import React from 'react'
import './ExpenseDate.css'



const ExpenseDate = (props) => {

    const month = props.xxx.toLocaleString('en-US',{month:'long'});
    const day = props.xxx.toLocaleString('en-US',{day:'2-digit'});
    const year = props.xxx.getFullYear();

  return (
    <div className='expense-date'>   
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>    
    </div>
  )
}

export default ExpenseDate
