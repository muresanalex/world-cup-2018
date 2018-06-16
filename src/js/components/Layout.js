import React, { Component } from "react";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            title: "It works!",
        };
    }

    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
            </div>
        );
    }
}

export default Layout;
