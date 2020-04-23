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

  userGreeting: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:5001/api/user',
        data: postdata
      })

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