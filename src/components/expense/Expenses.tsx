import ExpenseItem from '@components/expense/ExpenseItem';
import Card from '@components/ui/Card';
import { Expense } from '@models/expense';

type ExpensesProps = {
  expenses: Expense[];
};

const Expenses = ({ expenses }: ExpensesProps) => {
  return (
    <Card className='expenses'>
      {expenses.map((expense, i) => (
        <ExpenseItem key={i} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
