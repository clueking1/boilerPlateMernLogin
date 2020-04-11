import axios from "axios";

export default {

  createUser: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:5001/user',
        data: postdata
      })

  },
 
  login: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:5001/api/login',
        data: postdata
      })

  },

  logout: function() {
    return axios.get("/logout");
  },
 
  userGreeting: function() {
    return axios.get("/api/user_data");
  },
  checkUser: function(getData) {
    return axios({
        method: 'get',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:5001/api/member',
        data: getData
      })
  }
};