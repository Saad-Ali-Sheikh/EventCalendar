import React from 'react';
import './Register.css';
import logo from '../Asserts/2-01.png';

function Register ({OnrouteChange})
{
    return (
        <div className="signup-box">
            <form class="Sign-up form" action=""  method="post">
                <a className="image1" href="#"><img src={logo} width="90px"></img></a>
                <input className="user-input" type="text" name="" placeholder="Username" required></input> 
                <input className="user-input" type="email" name="" placeholder="Emailaddress" required></input>
                <input className="user-input" type="password" name="" placeholder="Password" required></input>
                <input className="btn" type="submit" name="" value="SIGN UP"></input>
                <div className="option-02">
                    <p className="registered">Already Registered <a className="signin" href="#" onClick={()=>OnrouteChange("Signin")}>SIGN IN</a></p>
                </div>
            </form>  
        </div>
    );

}
export default Register;