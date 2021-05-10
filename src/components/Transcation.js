import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState';


const Transcation =({transaction})=>{

    const {deleteTranscation} =useContext(GlobalContext);

       let sign = transaction.amount>0?"+":"-";

    return(
      
        <li className={transaction.amount>0?"plus":"minus"}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn"
                    onClick={()=>deleteTranscation(transaction.id)}
            >
                
                X</button>
        </li>


    );


}

export default Transcation;