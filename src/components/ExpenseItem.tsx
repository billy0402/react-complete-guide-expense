import { Expense } from '../models/expense';
import ExpenseDate from './ExpenseDate';

type ExpenseItemProps = Expense;

const ExpenseItem = ({ title, amount, date }: ExpenseItemProps) => {
  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>$ {amount}</div>
    </div>
  );
};

export default ExpenseItem;
