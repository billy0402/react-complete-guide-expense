import { useState } from 'react';

import ExpensesChart from '@components/expense/ExpensesChart';
import ExpenseFilter from '@components/expense/ExpensesFilter';
import ExpenseList from '@components/expense/ExpenseList';
import Card from '@components/ui/Card';
import { Expense } from '@models/expense';

type ExpensesProps = {
  expenses: Expense[];
};

const Expenses = ({ expenses }: ExpensesProps) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear: number) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === filteredYear,
  );

  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
