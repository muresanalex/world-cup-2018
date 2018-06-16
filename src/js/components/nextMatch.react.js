import React from "react";
import Spinner from "./spinner.react";
import "./nextMatch.scss";

const NextMatch = ( { fixture } ) => {
    console.log( "fixture: ", fixture );
    if ( !fixture ) {
        return (
            <div className="next-match-wrapper">
                <Spinner />
            </div> );
    }

    const isLive = fixture.status === "IN_PLAY";
    const homeTeamGoals = fixture.result.goalsHomeTeam;
    const awayTeamGoals = fixture.result.goalsAwayTeam;
    const score = isLive ? <span>{ `${ homeTeamGoals } - ${ awayTeamGoals }` }</span> : <span> - </span>;

    return (
        <div className="next-match-wrapper">
            <h4>Next Match</h4>
            { isLive && (
                <span className="live-match">LIVE</span>
            ) }
            <div className="next-match-container">
                <span>{ fixture.homeTeamName }</span>
                { score }
                <span>{ fixture.awayTeamName }</span>
            </div>
        </div>
    );
};

export default NextMatch;
