import React, { useContext, useState } from 'react'
import {GlobalContext} from "./GlobalState"

const AddTranscation=()=>{

    let [text,setText]=useState("");
    let [amount,setAmount]=useState(0);

    let {addTransaction}=useContext(GlobalContext);


    const onFormSubmit =(e)=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random() * 1000),
            text,
            amount:+amount //parse to integer coz reduce return string

        }

        addTransaction(newTransaction);


    }

    return(


        <div>
            <h3>Add new transcation </h3>

            <form onSubmit={onFormSubmit}>
                 <div className="form-control">
                    <label htmlFor="Descrption">
                        Description
                    </label>
                    <input type="text"
                            id="Descrption"
                            value={text}
                            onChange={(e)=>{
                                setText(e.target.value);
                            }}
                            placeholder="Enter the text"
                        
                       ></input>
                </div>


                <div className="form-control">
                    <label htmlFor="TransactionAmount">
                    Transaction Amount
                    </label>
                    <input type="number"
                            id="TransactionAmount"
                            value={amount}
                            onChange={(e)=>{
                                setAmount(e.target.value);
                            }}
                            placeholder="Enter the transaction amount"
                        
                       ></input>
                </div>

                <button className="btn">Submit</button>
              
            </form>

        </div>

    );
}

export default AddTranscation;

