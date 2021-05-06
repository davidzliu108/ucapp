import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { Header } from './common';

function Map() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 35.910259, lng: -79.055473 }} />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Gmapp() {
    return (
        <div>
            <div>
                <div class="text-center" ><h2 > UC Center</h2></div>
                <Header />
                <h5>Find a public bathroom</h5>
                <hr></hr>
            </div>

            <div style={{ width: '50vw', height: "50vh" }}>
                <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDcusFPt8j0clrOFGD8eIR3AJ0raVOPeNc'}
                    loadingElement={<div style={{ height: "100%" }} />}
                    containerElement={<div style={{ height: "100%" }} />}
                    mapElement={<div style={{ height: "100%" }} />}

                />
            </div>
        </div>


    )
}
