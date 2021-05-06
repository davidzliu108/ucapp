import React from 'react'
import { Header } from "./common";

function More() {
    return (
        <div>
             <div class="text-center" ><h2 > UC Center</h2></div>
            <Header />
            <a href="/ibdreddit" className="navbar-item">IBD Forum</a>
            <a href="/ibdaiddiet" className="navbar-item">IBD AID Diet</a>
            <a href="/donate" className="navbar-item">Donate</a>

        </div>
    )
}

export default More
