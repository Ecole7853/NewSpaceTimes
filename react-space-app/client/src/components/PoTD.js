import React, { useState, useEffect } from 'react';
import { dailyPhoto } from '../utils/apiCalls';
import { useMutation} from '@apollo/client';
import "../styles/POTD.css";
import { ADD_PHOTO } from '../utils/mutations';
const fetch = require('node-fetch');


export default function Potd ({ userId }) {
    const[photo, setPhoto] = useState({});
    const[addPhoto] = useMutation(ADD_PHOTO)

    const nasaApiKey = '94jx5aj4QNfyedbpPQ5m3UkzkknBz4yKIZpynDay';
    const photoDaily = 'https://api.nasa.gov/planetary/apod?api_key='+nasaApiKey;
    
    useEffect(() => {
        getphoto();
      }, []);

      const getphoto = async () => {
        const response = await fetch(photoDaily);
        const jsonData = await response.json();
        setPhoto(jsonData);
      };
      
      const handleSavePhoto = async (event) => {
        event.preventDefault();

        try {
            const data = await addPhoto({
                variables: { photo: photo.hdurl }
            });
            //setPhoto('');
        } catch (err) {
            console.error(err);
        }
    }

    dailyPhoto();
    return (
        <div>
            <div className='newsDiv'>
            <h2>NASA Photo of the Day</h2>
            <img className="daily-photo" alt="POTD - Space API Call" src="" />
            <p>Save this photo to your profile!</p>
            <button onClick={handleSavePhoto} className="btn btn-primary">Save</button>
            </div>
        </div>
    )
}


