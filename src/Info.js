import React, { useState } from "react";
import "./styles/style.css";

const Info = ({ msg, setMsg }) => {
    // console.log(name, age);
    // let friends = ["Mario", "Maria", "Max"];
    // let test = [1, 2, 3, 4];
    // const aaa = () => {
    //     console.log("Hello");
    //     return 100000;
    // };
    let [name, setName] = useState("Mario");
    let age = 28;
    const change = () => {
        setName("Mr.Mario");
    };
    return (
        <div className='Info'>
            {msg.map((msgs, index) => {
                return <p key={index}>Content is : {msgs}</p>;
            })}
            <h1>Friend's name:{name}</h1>
            <h1>Friend's age:{age}</h1>
            <button onClick={change}>Change name</button>
            {/* <h1>This is Info component.</h1>
            <h1>{1234567890}</h1>
            <h2>{77 * 66}</h2>
            <h3>{Math.random()}</h3>
            <h4>{aaa()}</h4>
            <p>My friends are :</p>
            {friends.map((friend) => {
                return <p>{friend}</p>;
            })}
            <p>{test}</p>
            {friends.map((friend) => (
                <p>My friend is {friend}</p>
            ))} */}
        </div>
    );
};

export default Info;
