import React from 'react'

const AddTranscation=()=>{

    return(


        <div>
            <h3>Add new transcation </h3>

            <form>
                 <div className="form-control">
                    <label htmlFor="Descrption">
                        Description
                    </label>
                    <input type="text"
                            id="Descrption"
                            placeholder="Enter the text"
                        
                       ></input>
                </div>


                <div className="form-control">
                    <label htmlFor="TransactionAmount">
                    Transaction Amount
                    </label>
                    <input type="text"
                            id="TransactionAmount"
                            placeholder="Enter the transaction amount"
                        
                       ></input>
                </div>

                <button className="btn">Submit</button>
            </form>

        </div>

    );
}

export default AddTranscation;

