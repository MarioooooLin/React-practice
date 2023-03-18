import React from "react";

const Nav = () => {
    return (
        <nav style={({ color: "red" }, { backgroundColor: "yellow" })}>
            <ul>
                <li>
                    <a href='#' style={{ color: "red" }}>
                        INDEX
                    </a>
                </li>
                <li>
                    <a href='#' style={{ color: "red" }}>
                        PAGE
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
