import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/auth';

const FrontPage = () => {
    const [userFormState, setUserFormState] = useState({ email: '', password: '' });
    const [loginUser] = useMutation(LOGIN_USER);
    //const [validated] = useState(false);
   // const [showAlert, setShowAlert] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserFormState({ ...userFormState, [name]: value });
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
            const { data } = await loginUser({
                variables: { ...userFormState },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
            //setShowAlert(true);
        }

        setUserFormState({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <div id="frontContainer">
                <div id="frontImage">
                    <div id="frontSpacingContainer">
                        <div id="frontRowOne">
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
                                <button id="frontSubmit" onClick={handleFormSubmit}>Enter</button>
                            </div>
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