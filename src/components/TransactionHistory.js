import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState'
import Transcation from './Transcation';



const TransactionHistory=()=>{


    let {transaction}=useContext(GlobalContext);
    console.log("transcation-->",transaction);

    return(

        <div>
            <h3>History</h3>

            <ul className="list">
                {
                    transaction.map((trans)=>{
                        return(<Transcation key={trans.id} transaction={trans} />)
                     
                    })
                }
                    
            </ul>

            
        </div>

        

    );
}
export default TransactionHistory;