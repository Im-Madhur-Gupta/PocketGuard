import { useState } from "react/cjs/react.development";
import TransactionCard from "./TransactionCard";
import "./RecentTransactions.css";

const RecentTransactions = () => {
  const [pastTransacs, setPastTransacs] = useState([
    {
      category: "Shopping",
      desc: "vegetable shopping",
      amount: "1000",
      time: "10:00AM",
    },
    {
      category: "Shopping",
      desc: "vegetable shopping",
      amount: "1000",
      time: "10:00AM",
    },
    {
      category: "Shopping",
      desc: "vegetable shopping",
      amount: "1000",
      time: "10:00AM",
    },
    {
      category: "Shopping",
      desc: "vegetable shopping",
      amount: "1000",
      time: "10:00AM",
    },
  ]);
  return (
    <div className="recenttransactions__container">
      <h2>Recent Transactions</h2>
      <div className="transaccard__container">
        {pastTransacs.map(({ category, desc, amount, time }) => (
          <TransactionCard
            category={category}
            desc={desc}
            amount={amount}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
