import React from "react";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "Red" };
        this.btnChange = this.btnChange.bind(this);
    }
    componentDidMount() {
        console.log("Car has been render");
    }
    componentDidUpdate() {
        console.log("Car has been update");
    }

    btnChange() {
        this.setState({ color: "Blue" });
    }

    render() {
        return (
            <div>
                <h2>
                    I am a {this.props.brand} {this.state.color} Car
                </h2>
                <button onClick={this.btnChange}>Change</button>
            </div>
        );
    }
}

export default Car;
