import { useState } from 'react';

import ExpenseForm from '@components/new-expense/ExpenseForm';
import { Expense } from '@models/expense';

type NewExpenseProps = {
  onAddExpense: (expense: Expense) => void;
};

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const switchEditingHandler = (value: boolean) => {
    setIsEditing(value);
  };

  const onSaveExpenseHandler = (expense: Omit<Expense, 'id'>) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    onAddExpense(newExpense);
    switchEditingHandler(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button type='button' onClick={() => switchEditingHandler(true)}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={() => switchEditingHandler(false)}
          onSaveExpense={onSaveExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
