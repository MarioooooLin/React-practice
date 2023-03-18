//import Nav from "./Nav";
import React, { useState, useEffect } from "react";
import Info from "./Info";
import Create from "./Create";

function App() {
    let [myName, setMyName] = useState("Mario Lin");

    const changeBtn = () => {
        setMyName("Maria Lee");
    };

    useEffect(() => {
        console.log("useEffect's function is running");
    }, [myName]);

    // let [msg, setMsg] = useState([]);

    // let friends = ["A", "B", "C", "D"];
    // let test1 = [
    //     { name: "AA", age: "28" },
    //     { name: "BB", age: "55" },
    //     { name: "CC", age: "33" },
    // ];
    // let myFriend = "E";

    // const clickButton = (msg) => {
    //     alert("You clicked the button...");
    //     alert(msg);
    // };
    return (
        <div>
            <h1>This is h1 tag</h1>
            <h2>{myName}</h2>
            <button onClick={changeBtn}>Change</button>
            {/* <Nav /> */}
            {/* <Create msg={msg} setMsg={setMsg} /> */}
            {/* <Info />
            <Info name={friends[0]} age={15} />
            <Info name={friends[1]} age={20} />
            <Info name={myFriend} />
            <Info name='D' /> */}
            {/* {test1.map((test2) => (
                <Info name={test2.name} age={test2.age} />
            ))}
            <button
                onClick={() => {
                    clickButton("Today is a good day");
                }}
            > 
                Click please
            </button>
            <button
                onClick={() => {
                    clickButton();
                }}
            >
                test 3
            </button>
            <button onClick={clickButton}>SIMPLE</button> */}
            {/* <Info msg={msg} setMsg={setMsg} /> */}
        </div>
    );
}

export default App;
