import ExperienceForm from "./ExperienceForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.expenseHanlder(expenseData);
  };

  return (
    <>
      <ExperienceForm onSaveExpenseDataHandler={saveExpenseDataHandler} />
    </>
  );
};
export default NewExpense;
