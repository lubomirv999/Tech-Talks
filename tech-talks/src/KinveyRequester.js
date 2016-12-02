import $ from 'jquery';

// TODO: Add appKey and appSecret
const KinveyRequester = (function () {
   const baseUrl = 'https://baas.kinvey.com/';
   const appKey = '';
   const appSecret = '';
   const kinveyAppAuthHeaders = {
       'Authorization' : 'Basic ' + btoa(appKey + ':' + appSecret)
   };

    function loginUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function registerUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function logoutUser() {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/_logout",
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }
});