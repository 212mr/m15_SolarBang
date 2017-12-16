

// Call & init
$(document).ready(function () {
    $("div.menu-bar").click(function () {
        $("div.nav").toggle("slide");
    });


    $('.ba-slider').each(function () {
        var cur = $(this);
        // Adjust the slider
        var width = cur.width() + 'px';
        cur.find('.resize img').css('width', width);
        // Bind dragging events
        drags(cur.find('.handle'), cur.find('.resize'), cur);
    });
});








//
//
// function signUp(){
//     document.getElementById("signup").addEventListener('click',handleSignUp);
// }
//
// window.onload = function(){
//     signUp();
// }

function handleSignUp() {
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    if (email.length < 4) {
        alert('please enter a valid email');
        return;
    }
    if (password.length < 4) {
        alert('at least 4 digits password');
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        //success
        console.log('signed UP UP!');
        alert("Sign Up");
    }).catch(function (error) {
        var code = error.code;
        var message = error.message;
        alert("Sign Up Error code: " + code.toString() + " message: " + message);
    });
}

function handleSignIn() {
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(
        function () {

            var user = firebase.auth().currentUser;
            var name, email, photoUrl, uid, emailVerified;

            if (user != null) {
                name = user.displayName;
                email = user.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                                 // this value to authenticate with your backend server, if
                                 // you have one. Use User.getToken() instead.
            }
            //only if successfully signed in and control flow gets here
            //window.location.href=""

            console.log('signed IN!');
            alert("Sign IN");

            document.getElementById("idlogin").innerHTML = email;


        }).catch(
        //if there was an error
        function (error) {
            alert("Sign In" + error.message);
        }
    );



}

function handleSignOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log('signed out!');
        alert("Sign Out");
    })
        .catch(function (error) {
            alert("SignOut" + error.message);
            // An error happened.
        });
}

function clear() {
    document.getElementById('form-email').value = '';
    document.getElementById('form-password').value = '';
}

function handleFBLogin() {
    if (!firebase.auth().currentUser) {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                alert(user.email);
                window.location.href = "https://google.com/"
            })
            .catch(
                function (error) {
                    alert("FBlog" + error.message);

                }
            );
    }
    else {
        handleSignOut();
        alert('user is FB');
    }
}













// Update sliders on resize.
// Because we all do this: i.imgur.com/YkbaV.gif
$(window).resize(function () {
    $('.ba-slider').each(function () {
        var cur = $(this);
        var width = cur.width() + 'px';
        cur.find('.resize img').css('width', width);
    });
});

function drags(dragElement, resizeElement, container) {

    // Initialize the dragging event on mousedown.
    dragElement.on('mousedown touchstart', function (e) {

        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        // Check if it's a mouse or touch event and pass along the correct value
        var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

        // Get the initial position
        var dragWidth = dragElement.outerWidth(),
            posX = dragElement.offset().left + dragWidth - startX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth();

        // Set limits
        minLeft = containerOffset + 10;
        maxLeft = containerOffset + containerWidth - dragWidth - 10;

        // Calculate the dragging distance on mousemove.
        dragElement.parents().on("mousemove touchmove", function (e) {

            // Check if it's a mouse or touch event and pass along the correct value
            var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

            leftValue = moveX + posX - dragWidth;

            // Prevent going off limits
            if (leftValue < minLeft) {
                leftValue = minLeft;
            } else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            // Translate the handle's left value to masked divs width.
            widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

            // Set the new values for the slider and the handle.
            // Bind mouseup events to stop dragging.
            $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
                $(this).removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            $('.resizable').css('width', widthValue);
        }).on('mouseup touchend touchcancel', function () {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
        e.preventDefault();
    }).on('mouseup touchend touchcancel', function (e) {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
