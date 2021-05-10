import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState';

const AccountSummary =()=>{

    const {transaction}=useContext(GlobalContext);

    const amount=transaction.map(trans=>trans.amount)

    const income=amount.filter(trans=>trans>0)
                    .reduce((accum,cValue)=>{
                        return accum+cValue
                    },0)
                    .toFixed(2);
        console.log("incomeeeeee",income)



    const expense = (amount.filter(trans=>trans<0)
                    .reduce((accum,cValue)=>{
                        return accum+=cValue;
                    },0)*-1).toFixed(2);
            

    return(

        <div className="inc-exp-container">

            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>

            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>

        </div>

    );
}

export default AccountSummary;