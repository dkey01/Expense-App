import React, {useState} from 'react';
import './Expense.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expense (props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const addSelectedYear = (option) => {
    setSelectedYear(option)
  }

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === selectedYear)


    return (
      <div>
        <li>      
        <Card className="expenses">
          <ExpensesFilter selected = {selectedYear} selectedYearData = {addSelectedYear}/>
          <ExpenseChart expenses = {filteredExpenses}/>
          <ExpensesList list={filteredExpenses}/>
        </Card>
        </li>
      </div>
    )
}

export default Expense;