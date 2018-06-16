import React, { Component } from "react";
import "./navigation.scss";

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            items: [ "Home", "Fixtures", "Standings" ],
            activeIndex: 0,
        };
        this.handleClick = this.handleClick.bind( this );
        this.buildItems = this.buildItems.bind( this );
    }

    handleClick( index ) {
        return () => this.setState( { activeIndex: index } );
    }

    buildItems( item, index ) {
        const activeClass = index === this.state.activeIndex ? "active" : "";
        const middleButtonClass = index === 1 ? "middle" : "";

        return (
            <li
                key={ item }
                className={ `nav-item ${ activeClass } ${ middleButtonClass }` }
            >
                <button
                    onClick={ this.handleClick( index ) }
                >{ item }
                </button>

            </li>
        );
    }

    render() {
        return (
            <div className="navigation-wrapper">
                <ul>
                    { this.state.items.map( this.buildItems ) }
                </ul>
            </div>
        );
    }
}

export default Navigation;
