import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import '../styles/signup.css'


const SignUp = (props) => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ name: '', email: '', password: '' });
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    //addUser 
    const [addUser] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            //console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <>
            <div id="SignUp">
                <div id="SignUpInput">
                    <div id="signUpNameContainer">
                        <p>Please Enter Name</p>
                        <input type="input" id="signUpName" name="name" value={userFormData.name} onChange={handleInputChange} required minLength="3" maxLength="32"></input>
                    </div>
                    <div id="signUpEmailContainer">
                        <p>Please Enter Email</p>
                        <input type="email" id="signUpEmail" name="email" value={userFormData.email} onChange={handleInputChange}
                            required minLength="8" maxLength="32"></input>
                    </div>
                    <div id="signUpPwContainer">
                        <p>Please Enter Password</p>
                        <input type="password" id="signUpPw" name="password" value={userFormData.password} onChange={handleInputChange}
                            required minLength="8" maxLength="16"></input>
                    </div>
                    <div id="signUpButton">
                        <Link><button disabled={!(userFormData.name && userFormData.email && userFormData.password)} onClick={handleFormSubmit}>Sign Up</button></Link>
                    </div>
                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your Signup!
                </Alert>
                </div>
            </div>
        </>

    )
}
export default SignUp;