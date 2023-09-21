import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'


const ExpenseItem = (props) => { 

  // const [title, setTitle]=useState(props.title);

  // const handleChange =()=>{
  //   setTitle('How r U')
  //   console.log(title)
  // }
  

  return (
    <li>
    <Card className='expense-item'>     {/* ------------------------------Card is Wrapper components--------------------------------*/}
      <ExpenseDate xxx={props.time}/>
      <div className='expense-item__description'></div>
        {/* <h2>{props.title}</h2> */}
        <h2>{props.title}</h2>
      <div className='expense-item__price'>{props.rupees}</div> 
      {/* <button onClick={handleChange}>submit</button>   */}
    </Card>
    </li>
  )
}
export default ExpenseItem;
  