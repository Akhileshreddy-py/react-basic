import React,{useState} from "react";
import "./style.css";


export default function App() {
  let i=0;
  var sub=""
  console.log(sub);
  var [sub,setsub]=useState("subscrie");
  console.log(sub);



  
  return (
    <div>
      <h1>Hello StackBlitz! {sub}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={()=>{
        if(sub=="subscribe")
        {
        setsub("unsubscribe");
        }
        else{
          setsub("subscribe");
        }
      }}> {sub}</button>
  <button onClick={()=>{count=0}}>reset</button>
    </div>
  );
}
