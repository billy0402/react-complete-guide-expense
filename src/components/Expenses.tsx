import { Expense } from '../models/expense';
import ExpenseItem from './ExpenseItem';

type ExpensesProps = {
  expenses: Expense[];
};

const Expenses = ({ expenses }: ExpensesProps) => {
  return (
    <div className='expenses'>
      {expenses.map((expense, i) => (
        <ExpenseItem key={i} {...expense} />
      ))}
    </div>
  );
};

export default Expenses;
