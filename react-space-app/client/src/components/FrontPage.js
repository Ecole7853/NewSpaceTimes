import React from "react";

function FrontPage(props) {
    return (
        <>
{/* NEEDS ON CLICK FUNCTION COMPLETED!!! */}
            <div id="frontContainer">
                <div id="frontImage">
                    <div id="frontSpacingContainer">
                        <div id="frontRowOne">
                            <div id="frontLogin">
                                <div id="frontNameContainer">
                                    <p>Please Enter Name</p>
                                    <input type="input" id="frontName" name="name" required minlength="8" maxlength="16"></input>
                                </div>
                                <div id="frontPwContainer">
                                    <p>Please Enter Password</p>
                                    <input  type="input" id="frontPw" name="password" required minlength="8" maxlength="16"></input>
                                </div>
                                <div id="buttons">
                                <button onClick = {() => ("")} id="frontLoginButton">Login</button>
                                <button onClick = {() => props.pageChanger("SignUp")}>Sign Up</button>
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