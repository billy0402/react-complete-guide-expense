import { useState } from 'react';

import ExpenseFilter from '@components/expense/ExpensesFilter';
import ExpenseItem from '@components/expense/ExpenseItem';
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
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
