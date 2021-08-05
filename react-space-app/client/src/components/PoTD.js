import React from 'react';
import { dailyPhoto } from '../utils/apiCalls';
import "../styles/POTD.css";

export default function Potd () {
    dailyPhoto();
    return (
        <div>
            <div className="nasa-potd-div">
                <h2>NASA Photo of the Day</h2>
            <img className="daily-photo" alt="POTD - Space API Call" src="" />
            <button className="">Save</button>
            </div>
        </div>
    )
}


