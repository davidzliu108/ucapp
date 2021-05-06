import React from 'react';
import { Navigation } from '../../common'
import './Header.css';

function Header() {
    return (
        <section className="header">
            <section className="header-top_navbar">
                <section className="header-top_navigation">
                    <Navigation />
                </section>
                <hr className="header-top_separator"></hr>
            </section>
        </section>
    )
}

export default Header;