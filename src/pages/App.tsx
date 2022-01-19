import { useState } from 'react';

import Expenses from '@components/expense/Expenses';
import NewExpense from '@components/new-expense/NewExpense';
import { expenses as initialExpenses } from '@fixtures/expenses';
import { Expense } from '@models/expense';

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
