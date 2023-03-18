import React, { useState } from "react";

const Create = ({ msg, setMsg }) => {
    // let [msg, setMsg] = useState([]);
    let [input, setInput] = useState("");

    const submitBtn = (e) => {
        e.preventDefault();
        setMsg([...msg, input]);
        setInput("");
    };

    const inputSet = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    return (
        <form action=''>
            <input type='text' onChange={inputSet} value={input} />
            <button onClick={submitBtn}>Submit</button>
        </form>
    );
};

export default Create;
