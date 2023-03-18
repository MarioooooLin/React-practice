import Nav from "./Nav";
import Info from "./Info";

function App() {
    let friends = ["A", "B", "C", "D"];
    let test1 = [
        { name: "AA", age: "28" },
        { name: "BB", age: "55" },
        { name: "CC", age: "33" },
    ];
    let myFriend = "E";
    return (
        <div>
            <h1>This is h1 tag</h1>
            <Nav />
            {/* <Info />
            <Info name={friends[0]} age={15} />
            <Info name={friends[1]} age={20} />
            <Info name={myFriend} />
            <Info name='D' /> */}
            {test1.map((test2) => (
                <Info name={test2.name} age={test2.age} />
            ))}
        </div>
    );
}

export default App;
