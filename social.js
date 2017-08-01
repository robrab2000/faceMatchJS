var imgURL;

window.connectFacebook = function() {
    // This is called with the results from from FB.getLoginStatus().
    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            FetchProfilePics();
        } else {
            // The person is not logged into your app or we are unable to tell.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        }
    }

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    function checkLoginState() {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '1662127617165221',
            xfbml      : true,
            version    : 'v2.10'
        });

        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });

    };

    // Load the SDK asynchronously
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    function FetchProfilePics() {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
        });
        console.log("Gonna get a selfie..");
        /*
        FB.api(
            '/me/picture',
            'GET',
            {"type":"square","height":"128","width":"128"},
            function(response) {
                // Insert your code here
                imgURL = response.data.url;
                console.log(imgURL);
                images = loadImages(["pic0.jpg", "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg"]);
            }
        );
        */

        FB.api(
            '/me/taggable_friends',
            'GET',
            {"fields":"name,picture.type(normal)","limit":"10000"},
            function(response) {
                var fbImages;
                fbImages = response.data;
                var imageURL = [];
                for (var i = 0; i < 7; i++) {
                    imageURL[i] = fbImages[fbImages.length - 1 - i].picture.data.url;
                }
                images = loadImages(imageURL);//[imageURL[0], imageURL[1], imageURL[2], imageURL[3], imageURL[4], imageURL[5], imageURL[6]]);
                console.log("poop");
            }
        );

    }
}