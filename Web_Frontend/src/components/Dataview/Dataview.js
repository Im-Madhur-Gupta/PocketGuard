import React from "react";
import { useState } from "react/cjs/react.development";
import expenseimg from "../../images/expense.png";
import incomeimg from "../../images/income.png";

import "./Dataview.css";

function Dataview() {
  let amount = "6000";
  let income = "600";
  let expenses = "100";
  const [monthlyLimit, setMonthlyLimit] = useState("");

  let today = new Date();
  let month = today.getMonth();
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let thismonth = months[month];
  return (
    <div className="dataview">
      <label class="mth">{thismonth}</label>
      <div className="balance__container">
        <h1 className="bal">Available Balance</h1>
        <h1 className="amt">₹ {amount}</h1>
      </div>
      <div className="monthlylimit__container">
        <h1 className="limit">Enter Your Monthly Limit</h1>
        <input
          type="text"
          className="monthlylimit"
          onClick={(e) => {
            setMonthlyLimit(e.target.value);
          }}
        />
      </div>
      <div className="income_expense_container">
        <div className="income">
          <div className="incomeImg">
            <img src={incomeimg}/>
          </div>
          <div className="income__container__text">
            <h3>Income</h3>
            <p>{`₹ ${income}`}</p>
          </div>
        </div>
        <div className="expenses">
          <div className="expensesImg">
            <img src={expenseimg} />
          </div>
          <div className="expenses__container__text">
            <h3>Expenses</h3>
            <p>{`₹ ${expenses}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dataview;
