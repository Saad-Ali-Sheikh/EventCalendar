import React from 'react';
import './SignIn.css';
import logo from '../Asserts/2-01.png';
function SignIn ({OnrouteChange})
{
    return (
        <div className="login">
            <form class="Sign-up form" action=""  method="post">
                <a className="image1" href="#"><img src={logo} width="90px"></img></a>
                <input className="user-input" type="text" name="" placeholder="Username" required></input> 
                <input className="user-input" type="password" name="" placeholder="Password" required></input>
                <input className="btn" type="submit" name="" value="LOGIN" onClick={()=>OnrouteChange("Home")}></input>
                <div className="option-02">
                    <p className="registered">Not Registered? <a className="signin" onClick={()=>OnrouteChange("Register")} href="#">Create an Account</a></p>
                </div>
            </form>  
        </div>
    );

}
export default SignIn;