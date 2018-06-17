const baseUrl = "http://api.football-data.org/v1/competitions/467";
const headers = {
    "X-Auth-Token": "a8d150841c384518882a1eaa1478b199",
    "X-Response-Control": "full",
};

function getCompetition( ) {
    return fetch( baseUrl, {
        method: "GET",
        headers,
    } )
        .then( ( res ) => res.json() );
}

function getFixtures() {
    return fetch( `${ baseUrl }/fixtures`, {
        method: "GET",
        headers,
    } )
        .then( ( res ) => res.json() );
}

function getLeagueTable() {
    return fetch( `${ baseUrl }/leagueTable`, {
        method: "GET",
        headers,
    } )
        .then( ( res ) => res.json() );
}

export {
    getCompetition,
    getFixtures,
    getLeagueTable,
};
