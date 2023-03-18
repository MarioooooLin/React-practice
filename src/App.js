import Nav from "./Nav";
import Info from "./Info";

function App() {
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
            <Nav />
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
            <Info />
        </div>
    );
}

export default App;
