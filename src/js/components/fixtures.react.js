import React from "react";
import Spinner from "./spinner.react";
import FixturesGroup from "./fixturesGroup.react";

const FixturesOverview = ( { fixtures } ) => {
    const isLoading = fixtures.length === 0;
    const firstTenFixtures = fixtures.filter( ( item, index ) => index < 5 );

    if ( isLoading ) {
        return <Spinner />;
    }

    return (
        <FixturesGroup title="Fixtures" fixtures={ firstTenFixtures } />
    );
};

export default FixturesOverview;
