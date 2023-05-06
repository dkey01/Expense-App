import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [showForm, setShowForm] = useState(false);

    const cancelFormHandler = () => {
        setShowForm(false)
    }

    const showFormHandler = () => {
        setShowForm(true)
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle (event.target.value)
        console.log(event.target.value)
    }

     const amountChangeHandler = (event) => {
        setEnteredAmount (event.target.value)
        console.log(event.target.value)
     }
    
    const dateChangeHandler = (event) => {
        setEnteredDate (event.target.value)
        console.log(event.target.value)

    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date (enteredDate)
        }

        props.onSaveExpense(expenseData)

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        setShowForm(false);
    }
        return  (<>{showForm ?  <form onSubmit = {submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                  <label>Title</label>
                  <input type="text" value = {enteredTitle} onChange = {titleChangeHandler}/>
              </div>
              <div className="new-expense__control">
                  <label>Amount</label>
                  <input type="number" min="0.01" step="0.01" value = {enteredAmount} onChange = {amountChangeHandler}/>
              </div>
              <div className="new-expense__control">
                  <label>Date</label>
                  <input type="date" min="2019-01-01" max="2022-12-31" value = {enteredDate} onChange = {dateChangeHandler}/>
              </div>
            </div>
            <div className="new-expense__actions">
              <button onClick = {cancelFormHandler}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
            </form> : <div className="new-expense__add-new-expense-button">
            <button onClick = {showFormHandler}>Add New Expense</button>
          </div>}
        </>)
    
}

export default ExpenseForm;