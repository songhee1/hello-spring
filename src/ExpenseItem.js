import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.expenseDate.toLocalesString("en-US", { month: "long" });
  const day = props.expenseDate.toLocalesString("en-US", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item+description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
