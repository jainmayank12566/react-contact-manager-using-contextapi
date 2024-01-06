import { createContext, useContext, useState } from "react";

export const CounterContext=createContext(null);
export function Set(){
    return useContext(CounterContext);
}
export const CounterProvider=(props)=>{
    const obj={
        name:"",
        email:""
    }
    const[data,setdata]=useState(obj);
    const[activity,setactivity]=useState([]);
    return(
        <CounterContext.Provider value={{data,setdata,activity,setactivity,obj}}>
            {props.children}
        </CounterContext.Provider>
    )
}