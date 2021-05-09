import React from 'react'

const TransactionHistory=()=>{


    return(

        <div>
            <h3>History</h3>

            <ul className="list">
                <li className="plus">
                    Income1
                    <span>$10000</span>
                    <button className="delete-btn">X</button>
                    </li>
                <li className="minus">
                    expense
                    <span>-$5000</span>
                    <button className="delete-btn">X</button>
                    </li>
            </ul>

            
        </div>

        

    );
}
export default TransactionHistory;