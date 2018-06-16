import React from "react";
import Spinner from "./spinner.react";
import "./fixtures.scss";

const FixturesGroup = ( { fixtures, title } ) => {
    const isLoading = fixtures.length === 0;

    if ( isLoading ) {
        return (
            <div className="fixtures-group-wrapper">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="fixtures-group-wrapper">
            <h4>{ title }</h4>
            { fixtures.map( buildFixtures ) }
        </div>
    );
};

function buildFixtures( item ) {
    const homeTeam = item.homeTeamName || "TBA";
    const awayTeam = item.awayTeamName || "TBA";
    const score = item.status === "FINISHED" ? `${ item.result.goalsHomeTeam } - ${ item.result.goalsAwayTeam }` : "-";

    return (
        <div className="fixture" key={ homeTeam + item.date + awayTeam }>
            <span className="home-team">{ homeTeam }</span>
            <span className="score">{ ` ${ score } ` }</span>
            <span className="away-team">{ awayTeam }</span>
        </div>
    );
}

export default FixturesGroup;
