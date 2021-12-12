import "./TransactionCard.css";
import shoppingicon from "../../images/basket.png";

const TransactionCard = ({ category, desc, amount, time }) => (
  <div className="TransactionCard__maincont">
    <div className="TransactionCard__innercont1">
      <div>
        <img src={shoppingicon} alt="" />
      </div>
      <div className="TransactionCard_desccont">
        <div className="TransactionCard_category">{category}</div>
        <div className="TransactionCard_desc">{desc}</div>
      </div>
    </div>
    <div className="TransactionCard__innercont2">
      <div className="TransactionCard_amount">{`-₹ ${amount}`}</div>
      <div className="TransactionCard_time">{time}</div>
    </div>
  </div>
);

export default TransactionCard;
