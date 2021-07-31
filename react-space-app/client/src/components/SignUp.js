import React, { useState } from "react";

function SignUp(props) {
    return (
        <> 
            <div id="SignUp">
                <div id="SignUpInput">
                    <div id="signUpEmailContainer">
                        <p>Please Enter Email</p>
                    <input type="input" id="signUpEmail" name="email" required minlength="8" maxlength="32"></input>
                    </div>
                    <div id="signUpPwContainer">
                        <p>Please Enter Password</p>
                    <input  type="input" id="signUpPw" name="password" required minlength="8" maxlength="16"></input>
                    </div>
                    <div id="signUpButton">
                    <button onClick = {() => props.pageChanger("SignUp")}>Sign Up</button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default SignUp;