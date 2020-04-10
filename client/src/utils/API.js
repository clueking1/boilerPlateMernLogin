import axios from "axios";

export default {

  createUser: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:4001/user',
        data: postdata
      })

  },
 
  login: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:4001/api/login',
        data: postdata
      })

  },

  logout: function() {
    return axios.get("/logout");
  },
 
  userGreeting: function() {
    return axios.get("/api/user_data");
  }
};