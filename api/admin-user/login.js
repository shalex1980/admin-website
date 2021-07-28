import axios from "axios"
import apiBaseUrl from "../../utils/apiBaseUrl.js"

export default function login(email, password, callback) {
    axios.put(`${apiBaseUrl}/users/login`, {
        email: email,
        password: password
    }, {
        withCredentials: true
    })
    .then(function(response) {
        callback(response.data)
    })
    .catch(function(error) {
        callback({success: false})
    })
}