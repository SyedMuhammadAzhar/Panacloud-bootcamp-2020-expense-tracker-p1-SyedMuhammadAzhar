import { createContext, useReducer } from "react"

import {GlobalReducer} from './GlobalReducer'

let initialState={

    transaction:[]
}


 export const GlobalContext = createContext(initialState);



 export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(GlobalReducer,initialState);

    //Action of AddTranscation
    function deleteTranscation(id){
       dispatch({
            type:"DELETE_TRANSACTION",
            payload:id

       })

    }


    const addTransaction =(transaction)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })


    }
 

    return(
    <GlobalContext.Provider value={
        {
            transaction:state.transaction,
            deleteTranscation,
            addTransaction
        }
    
    }>
        {children}

    </GlobalContext.Provider>

    )
 }