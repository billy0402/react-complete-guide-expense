import { useState } from 'react';

import { Expense } from '@models/expense';

type ExpenseFormProps = {
  onSaveExpense: (expense: Omit<Expense, 'id'>) => void;
};

const ExpenseForm = ({ onSaveExpense }: ExpenseFormProps) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  // const [expense, setExpense] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    // setExpense((prevState) => ({
    //   ...prevState,
    //   title: event.target.value,
    // }));
  };
  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
    // setExpense((prevState) => ({
    //   ...prevState,
    //   amount: event.target.value,
    // }));
  };
  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
    // setExpense((prevState) => ({
    //   ...prevState,
    //   date: event.target.value,
    // }));
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const expense = {
      title,
      amount: Number(amount),
      date: new Date(date),
    };
    onSaveExpense(expense);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={amount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={date}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
