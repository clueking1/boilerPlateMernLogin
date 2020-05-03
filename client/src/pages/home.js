import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Navbar from '../components/navBar'
import API from '../utils/API'
import fakeAuth from '../utils/authContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cookies from 'js-cookie'
import { Alert } from 'reactstrap';
import { withGlobalState } from 'react-globally'



function Home(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alertText, setAlert] = useState({
        text: '',
        there: false,
        type: ''
    })

    let un = Cookies.get('userUn')
    let pw = Cookies.get('userPw')
    let history = useHistory();
    let url = Cookies.get('url')

    function handleSubmit(e) {
        e.preventDefault();

        API.login({
            username: username,
            password: password
        })
        .then(res => {
            if (res) {
            props.setGlobalState({
                user: res.data
            })
 
            } else {
                return
            }
        })
        .then(() => {
            Cookies.set('userUn', username, { path: '' })
            Cookies.set('userPw', password, { path: '' })   
        })
        .then(() => {
            fakeAuth.authenticate(() => {
                history.replace('/member');
             });
        })
        .catch(err => {
            if (err) {
                setAlert({
                    text:  "Uh oh! Email or Password is Incorrect!",
                    there:  true,
                    type: 'danger'
                  })
            }
        })

    };

    useEffect(() => {
        
        if (un && pw) {
          API.login({
              username: un,
              password: pw
          })
          .then(res => {
              if (res) {
              props.setGlobalState({
                  user: res.data
              })
   
              } else {
                  return
              }
          })
          .then(() => {
              fakeAuth.authenticate(() => {
                  history.replace(url);

                });
          })
          .catch(err => {
              if (err) {
                  throw err
              }
          })
      } else {
          return
      }
    

  }, [])

 return (
     <div>
     <div>
        <Navbar /> 
    </div>
        <div>
            <form className="loginForm form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <input 
                className="form-control username-input"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                required 
                onChange={e => setUsername(e.target.value)}
                />

                <input 
                className="form-control password-input"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required 
                onChange={e => setPassword(e.target.value)}
                />   

       
                <Alert color={alertText.type} style={{ opacity: !alertText.there ? 0 : 1}}> 
                        {alertText.text}
                </Alert>  
                <div>   
                    <button type='submit' className='btn btn-lg btn-primary btn-block'>Log In</button>    
                </div> 
                
                <a className="signUp btn btn-lg btn-primary btn-block" href="/sign">Sign Up</a>
            </form>

        
        </div>
        </div>
       
    )   
}

export default withGlobalState(Home)