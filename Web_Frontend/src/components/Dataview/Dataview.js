import React from 'react';
import './Dataview.css';

function Dataview() {
    let today = new Date();
    let month = today.getMonth();
    let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];
    let thismonth = months[month];
    return (
        <div className="dataview">
            <label class='mth'>{thismonth}</label>
            <h1 className="bal">
                Available Balance
            </h1>
            <h1 className='amt'>
            ₹ 6784
            </h1>
            <h1 className='limit'>Enter Your Monthly Limit</h1>  
            <input type="number" className="amount"></input>          
        </div>
        
    );
}

export default Dataview;