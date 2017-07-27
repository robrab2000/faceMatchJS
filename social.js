

window.connectFacebook = function() {
    console.log("Logging In!");
    FB.getLoginStatus(function(response) {
        console.log(response.status);
        if (response.status === 'connected') {
            console.log('Logged in.');
        }
        else if (response.status === 'not_authorised') {
            console.log("FB not authorized")
        }
        else {
            console.log("else!");
            FB.login();
        }
    });
}