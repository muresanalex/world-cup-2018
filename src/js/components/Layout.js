import React, { Component } from "react";
import { getFixtures } from "../apiService/apiService";
import FixturesOverview from "./fixtures.react";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            fixtures: [],
        };
    }

    componentDidMount() {
        getFixtures()
            .then( ( res ) => {
                this.setState( { fixtures: res.fixtures } );
            } )
            .catch( ( err ) => { console.log( err ); } );
    }

    render() {
        return (
            <div>
                <FixturesOverview fixtures={ this.state.fixtures } />
            </div>
        );
    }
}

export default Layout;
