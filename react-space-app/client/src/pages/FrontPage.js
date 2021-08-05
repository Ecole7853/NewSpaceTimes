import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/auth';
import { Alert } from 'react-bootstrap'
import '../styles/frontpage.css';
import { Redirect, Link } from 'react-router-dom'

const FrontPage = (props) => {
    const [userFormState, setUserFormState] = useState({ email: '', password: '' });
    const [loginUser, {error, data}] = useMutation(LOGIN_USER);
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserFormState({ ...userFormState, [name]: value });
    };
    //console.log(Auth.loggedIn())
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await loginUser({
                variables: { ...userFormState },
            });

            Auth.login(data.login.token);

        } catch (err) {
            //console.error(err);
            setShowAlert(true);
        }

        setUserFormState({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <div id="frontContainer">
                { Auth.loggedIn() ? <Redirect to="/newsboard" /> : null}
                <div id="frontImage">
                    <div id="frontSpacingContainer">
                        <div id="frontRowOne">
                            {data ? (
                                <Redirect to="/newsboard" />
                            ) : (
                                <div id="frontLogin">
                                    <div id="frontNameContainer">
                                        <p>Please Enter Email</p>
                                        <input type="email" id="frontName" name="email" value={userFormState.email}
                                            onChange={handleChange} required minLength="8" maxLength="16"></input>
                                    </div>
                                    <div id="frontPwContainer">
                                        <p>Please Enter Password</p>
                                        <input type="password" id="frontPw" name="password" value={userFormState.password}
                                            onChange={handleChange} required minLength="8" maxLength="16"></input>
                                    </div>
                                    <div id="buttons">
                                        <button id="frontSubmit" onClick={handleFormSubmit}>Enter</button>
                                        <Link to={"/signup"}><button id="frontSignButton">Sign Up</button></Link>
                                    </div>
                                </div>
                            )}
                            {error && (
                                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                                    {error.message}
                                </Alert>
                             )}
                        </div>
                        <div id="frontRowTwo"></div>
                        <div id="frontRowThree"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FrontPage;