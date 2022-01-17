import Expenses from '@components/expense/Expenses';
import { expenses } from '@fixtures/expenses';

const App = () => {
  return (
    <>
      <h2>Let's get start!</h2>
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
