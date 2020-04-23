import React, { useState } from 'react'
import Navbar from '../components/navBar'
import API from '../utils/API'
import { withGlobalState } from 'react-globally'
import { Alert } from 'reactstrap';

function Home() {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCon, setPasswordCon] = useState('')
    const [progress, setProgress] = useState('')
    const [val, setVal] = useState(0)
    const [progBc, setProgBc] = useState('')

    const [alertText, setAlert] = useState({
        text: '',
        there: false,
        type: ''
    })

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.match(mailformat)) {
            setAlert({
                text:  'Uh oh! Invalid Email Address!',
                there:  true,
                type: 'danger'
              })
            return
        } else if (password.length < 5) {
            setAlert({
              text:  'Password must be more than 5 characters!',
              there:  true,
              type: 'danger'
            })
            return
        } else if (password !== passwordCon) {
            setAlert({
                text:  "Password don't match! Make sure they do!",
                there:  true,
                type: 'danger'
              })
            return
        } else {
            search()
        }
    };

    function search() {
        API.createUser({
            username: username,
            email: email,
            password: password
        })
        .then(res => {
            if(res.data === 'user') {
                setAlert({
                    text:  "Uh oh! This username is taken!",
                    there:  true,
                    type: 'danger'
                  })
            } else if(res.data === 'email') {
                setAlert({
                    text:  "Uh oh! This email is already in use!",
                    there:  true,
                    type: 'danger'
                  })
            } else if(res.data === 'userCreated') {
                setAlert({
                    text:  "Welcome! Go back to login and login!",
                    there:  true,
                    type: 'success'
                  })
                  document.getElementById("create-course-form").reset()
                  setProgress(0)
            } else {
                return
            }

        })
    }

    function value(leng) {
            setVal(leng * 10)
            if(val >= 0) {
                setProgBc('red')
            } 
            if(val >= 40) {
                setProgBc('yellow')
            } 
            if(val >= 70) {
                setProgBc('green')
            } 
    }

    return (
         <div>
                <div>
                    <Navbar /> 
                </div>
                <div>
                
                <form className="signUpForm form-signin" id="create-course-form" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                    <input 
                    className="form-control email-input"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required 
                    onChange = {e => setEmail(e.target.value) }
                    />

                    <input 
                    className="form-control username-input"
                    id="username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    required 
                    onChange = {e => setUsername(e.target.value) }
                    />

                    <input 
                    className="form-control password-input"
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password-input"
                    required
                    onChange = {e => {
                        setPassword(e.target.value)
                        setProgress(e.target.value.length)
                        value(e.target.value.length)
                    }}
                    />   

                    <input 
                    className="form-control passwordCon-input"
                    id="passwordCon"
                    type="password"
                    placeholder="Confirm Password"
                    id="passwordCon-input"
                    name="confirm password"
                    required 
                    onChange = {e => setPasswordCon(e.target.value)}
                    />  
                    <div class="progressBar" style={{ opacity: progress > 0 ? 1 : 0}}>
                        <div class="progress" style={{ opacity: progress > 0 ? 1 : 0, width: `${val}%`, backgroundColor: `${progBc}` }} />
                    
                    </div>
              

                    <button type="submit" className="btn btn-lg btn-primary btn-block subBut" >Sign Up</button>
        
                    <a className="signUp" href="/">Login</a>
                    <Alert color={alertText.type} style={{ opacity: !alertText.there ? 0 : 1}}>
                        {alertText.text}
                    </Alert>
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

export default withGlobalState(Home)