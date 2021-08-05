import React from 'react';
import { spaceX } from '../utils/apiCalls';

export default function Spacexnews () {
    spaceX();
    return (
        <div>
            <div>
            <p>SpaceX News</p>
            <p className="spaceX-news"></p>
            </div>
        </div>
    )
}

