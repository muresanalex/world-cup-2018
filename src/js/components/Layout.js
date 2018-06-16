import React, { Component } from "react";
import { getFixtures } from "../apiService/apiService";
import FixturesGroup from "./fixturesGroup.react";
import NextMatch from "./nextMatch.react";
import Standings from "./standings.react";
import Navigation from "./navigation.react";
import "./layout.scss";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            lastFixtures: [],
            upcomingFixtures: [],
            nextMatch: null,
        };
    }

    componentDidMount() {
        getFixtures()
            .then( ( res ) => {
                const lastFixtures = res.fixtures.filter( ( item ) => item.status === "FINISHED" ).slice( -5 );
                const upcomingFixtures = res.fixtures.filter( ( item ) => item.status !== "FINISHED" ).slice( 0, 5 );
                const nextMatch = upcomingFixtures[ 0 ];

                this.setState( {
                    lastFixtures,
                    upcomingFixtures,
                    nextMatch,
                } );
            } )
            .catch( ( err ) => { console.log( err ); } );
    }

    render() {
        return (
            <div className="grid-container">
                <div className="header">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/2018_FIFA_World_Cup.svg/227px-2018_FIFA_World_Cup.svg.png" alt="logo" />
                </div>
                <div className="navigation">
                    <Navigation />
                </div>
                <div className="content">
                    <div className="left-column">
                        <NextMatch fixture={ this.state.nextMatch } />
                        <div className="fixtures-container">
                            <FixturesGroup title="Fixtures" fixtures={ this.state.lastFixtures } />
                            <FixturesGroup title="Upcoming Fixtures" fixtures={ this.state.upcomingFixtures } />
                        </div>
                    </div>
                    <div className="right-column">
                        <Standings />
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
