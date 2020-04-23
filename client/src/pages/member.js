import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import API from '../utils/API'
import { withGlobalState } from 'react-globally'
import Logout from '../components/logOutBut'

function Member(props) {
  Cookies.set('url', '/member', { path: '' })
    const [user, setUser] = useState('')
    console.log(props.globalState.user.id)
    useEffect(() => {
        API.userGreeting({
            id: props.globalState.user.id
        })
        .then(res => {
            setUser(res.data[0].username)
        })
    }, [])

    return (
        <div className="member-div">
            <p className="main-div">Welcome! {user}<span className="name"></span></p>
            <Logout />
        </div>
    )   
}

export default withGlobalState(Member)