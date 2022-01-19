import ExpenseItem from '@components/expense/ExpenseItem';
import { Expense } from '@models/expense';

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList = ({ expenses }: ExpenseListProps) => {
  if (!expenses.length) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  return (
    <div className='expenses-list'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
