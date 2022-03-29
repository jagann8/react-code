import React,{useState,useEffect} from 'react';

function CounterComponent(){
    const [count ,setCount]=useState(0)
    const [name,setName]=useState("jagan")

    let changeValue=()=>{
        setCount(count+1)
    }
    const changeName=()=>{
        setName("King Jagan")
    }
    document.title=`You Clicked ${count} times`;
   

    return(
        <div>
            <p>The Count Value is Increamenting {count}</p>
            <button onClick={changeValue}> Click Me </button>

            <hr />

            <p>My initial name is {name}</p>
            <button onClick={changeName}>Click me</button>
        </div>
    )
}
export default CounterComponent;

