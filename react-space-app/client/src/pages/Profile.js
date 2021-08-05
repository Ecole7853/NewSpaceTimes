import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/profile.css";
import Auth from '../utils/auth';
import { Redirect, useParams } from 'react-router-dom'
import {  Container, CardColumns, Card, Button } from 'react-bootstrap';
import { DELETE_PHOTO } from "../utils/mutations";
import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';


function Profile() {
  const { _id } = useParams();
  const { data } = useQuery(
    _id ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { _id: _id},
    }
  );
  const userData = data?.me || data?.userData || [];
  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  const [deletePhoto] = useMutation(DELETE_PHOTO)

  const handleDeletePhoto = async (photo) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await deletePhoto({
        variables: { photo },
      });
      console.log('data:', data);

    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      {Auth.loggedIn() ? null : <Redirect to="/" />}
      <Navigation />

      <div className="profileBackground">
      <Container>
        <h2 className="text-white">
          {userData.photos.length
            ? `Viewing ${userData.photos.length} saved ${userData.photos.length === 1 ? 'photo' : 'photos'}:`
            : 'You have no saved photos!'}
        </h2>
        <CardColumns>
          {userData.photos.map((photo) => {
            return (
              <Card key={photo} border='dark'>
                <Card.Img src={photo} alt='Daily Photo' variant='top' />
                <Card.Body>
                  <Button className='btn-block btn-danger' onClick={() => handleDeletePhoto(photo)}>
                    Delete this Photo!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;