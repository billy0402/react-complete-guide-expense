import ExpenseForm from '@components/new-expense/ExpenseForm';
import { Expense } from '@models/expense';

type NewExpenseProps = {
  onAddExpense: (expense: Expense) => void;
};

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const onSaveExpenseHandler = (expense: Omit<Expense, 'id'>) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    onAddExpense(newExpense);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
