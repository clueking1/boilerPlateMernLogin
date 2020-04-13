import React, { useRef } from 'react'
import API from '../utils/API'
import Navbar from '../components/navBar'

function Home() {

    const email = useRef();
    const username = useRef();
    const password = useRef();
    const passwordCon = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (password.current.value !== passwordCon.current.value) {
            console.log('no dice')
        } else {
            API.createUser({
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            })
            
        }

      };


    return (
         <div>
                <div>
                    <Navbar /> 
                </div>
                <div>
                
                <form className="signUpForm form-signin" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                    <input 
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    name="email"
                    required ref={email}
                    />

                    <input 
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    required ref={username}
                    />

                    <input 
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password-input"
                    required ref={password}
                    />   

                    <input 
                    className="form-control"
                    type="password"
                    placeholder="Confirm Password"
                    id="passwordCon-input"
                    name="confirm password"
                    required ref={passwordCon}
                    />  

              

                    <button type="submit" className="btn btn-lg btn-primary btn-block subBut" >Sign Up</button>
        
                    <a className="signUp" href="/">Login</a>

                    <input 
                    className="form-control"
                    type="email"
                    placeholder="Leave Blank"
                    id="botPass-input"
                    name="confirm password"
                    style={{visibility: "hidden"}}
                    />  

                </form>

                </div>
        </div>
    )   
}

export default Home