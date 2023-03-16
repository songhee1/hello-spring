import { useState } from "react";

const ExperienceForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("2022-01-27");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const formHanlder = (event) => {
    event.preventDefault();
    props.onSaveExpenseDataHandler({
      title: title,
      amount: amount,
      date: new Date(date),
    });
    setTitle('');
    setAmount('');
    setDate('');
  };
  return (
    <div>
      <form onSubmit={formHanlder}>
        <div>
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={title}></input>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
            value={amount}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2022-01-27"
            max="2022-12-31"
            onChange={dateHandler}
            value={date}
          ></input>
        </div>
        <div>
            <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};
export default ExperienceForm;
