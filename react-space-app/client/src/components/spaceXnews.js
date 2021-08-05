import React from 'react';
import { spaceX } from '../utils/apiCalls';

export default function Spacexnews () {
    spaceX();
    return (
        <div>
            <div className='newsDiv'>
            <h2>Lastest SpaceX News</h2>
            <p className="spaceX-news"></p>
            </div>
        </div>
    )
}

