import React from 'react';
import { issSearch } from '../utils/apiCalls';
import "../styles/POTD.css";

export default function Issnews () {
    issSearch();
    return (
        <div>
            <div>
                <p>International Space Station Location</p>
            <p>Latitude:<p className="space-lat"></p></p>
            <p>Longitude:<p className="space-long"></p></p>
            </div>
        </div>
    )
}
