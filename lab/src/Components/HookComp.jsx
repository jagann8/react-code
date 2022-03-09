import React, { useState, useEffect } from "react";



function HookComponent() {
    // const [name, setName] = useState("")
    // const changeName = () => {
    //     setName("mani")
    // };
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log(`You have clicked the button ${count}`);
    }, [count])

    useEffect(() => {
        console.log(`You have Clicked the button2 ${count2}`);
    }, [count2])

    return (
        <div>
            {/* <p>My name is {name}</p>
            <button onClick={changeName}> Click me </button> */}
            {/* <form>
                <input
                type="text"
                value={name}
                onChange={e=>{setName(e.target.value)}}
                placeholder="type something here ..."
                />
                <p>{name}</p>
            </form> */}

            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}> Click Me </button>
            </div>
            <div>
                <p>{count2}</p>
                <button onClick={() => setCount2(count2 + 1)}>Click Me 2</button>
            </div>


        </div>
    );
};


export default HookComponent;


