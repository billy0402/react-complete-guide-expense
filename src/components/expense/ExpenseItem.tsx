import ExpenseDate from '@components/expense/ExpenseDate';
import Card from '@components/ui/Card';
import { Expense } from '@models/expense';

type ExpenseItemProps = Expense;

const ExpenseItem = ({ title, amount, date }: ExpenseItemProps) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>$ {amount}</div>
    </Card>
  );
};

export default ExpenseItem;
