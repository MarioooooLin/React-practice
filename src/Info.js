import React from "react";

const Info = () => {
    let friends = ["Mario", "Maria", "Max"];
    let test = [1, 2, 3, 4];
    const aaa = () => {
        console.log("Hello");
        return 100000;
    };
    return (
        <div>
            <h1>This is Info component.</h1>
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
            ))}
        </div>
    );
};

export default Info;
