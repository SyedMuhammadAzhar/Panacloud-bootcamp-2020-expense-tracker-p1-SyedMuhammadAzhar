import React, { useContext } from 'react';
import {GlobalContext} from './GlobalState'

const Balance =()=>{

    let {transaction}=useContext(GlobalContext);
    
    const amount=transaction.map((trans)=>trans.amount)
    // console.log("amount-->",amount)
    let total=amount.reduce((accumulator,currentValue)=>(accumulator+=currentValue),0);
    console.log(total);


    return(

       <div>
            <h4>YOUR BALANCE</h4>
            <h1>${total}</h1>
        </div>
    


    );
}

export default Balance;