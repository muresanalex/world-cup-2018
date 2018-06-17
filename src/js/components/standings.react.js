import React from "react";
import "./standings.scss";

const Standings = ( { standings } ) => {
    const groups = buildGroups( standings );
    return (
        <div className="standings-wrapper">
            <h4>Standings</h4>
            { groups }
        </div>
    );
};

function buildGroups( standings ) {
    if ( !standings ) {
        return "";
    }

    return (
        <div className="standings-container">
            { buildTable( standings.A ) }
            { buildTable( standings.B ) }
            { buildTable( standings.C ) }
            { buildTable( standings.D ) }
            { buildTable( standings.E ) }
            { buildTable( standings.F ) }
            { buildTable( standings.G ) }
            { buildTable( standings.H ) }
        </div>
    );
}

function buildTable( table ) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{ `Group ${ table[ 0 ].group }` }</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                { table.map( buildItems ) }
            </tbody>
        </table>
    );
}

function buildItems( item ) {
    return (
        <tr key={ item.team }>
            <td className="team">{ item.team }</td>
            <td className="points">{ `${ item.points }p` }</td>
        </tr>
    );
}

export default Standings;
