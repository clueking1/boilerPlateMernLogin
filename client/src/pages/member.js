import React from "react";
import AuthContext from '../utils/authContext'
import LogOut from '../components/logOutBut'

function Member() {
    //states for username and password

 


    return (
        <div>
            <p>hello <span className="name"></span></p>
            <LogOut />
        </div>
    )   
}

export default Member