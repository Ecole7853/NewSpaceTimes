import React from 'react';
import { issSearch } from '../utils/apiCalls';
import "../styles/POTD.css";

export default function Issnews() {
    issSearch();
    return (
        <div className="newsDiv issDiv">
            <div className="space-station">
                <h2>International Space Station Location</h2>
                <div className="iss-location">
                <p>Latitude:<span className="space-lat"></span></p>
                <p>Longitude:<span className="space-long"></span></p>
                </div>
            </div>
        </div>
    )
}
