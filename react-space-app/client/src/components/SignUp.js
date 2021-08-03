import React, { useState } from "react";
import { Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

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

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
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
                    <input type="input" id="signUpName" name="Name" required minlength="3" maxlength="32"></input>
                    </div>
                    <div id="signUpEmailContainer">
                        <p>Please Enter Email</p>
                        <input type="email" id="signUpEmail" name="email"  onChange={handleInputChange}
            value={userFormData.email} required minlength="8" maxlength="32"></input>
                    </div>
                    <div id="signUpPwContainer">
                        <p>Please Enter Password</p>
                        <input type="password" id="signUpPw" name="password" onChange={handleInputChange}
            value={userFormData.password} required minlength="8" maxlength="16"></input>
                    </div>
                    <div id="signUpButton">
                        <button  disabled={!(userFormData.email && userFormData.password)} onClick={handleFormSubmit} onClick={() => props.pageChanger("NewsBoard")}>Sign Up</button>
                    </div>
                </div>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your signup!
                </Alert>
            </div>
        </>

    )
}
export default SignUp;