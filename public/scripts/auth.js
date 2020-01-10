// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        user.getIdToken(/* forceRefresh */ true).then(function (x) {

            // Send token to your backend via HTTPS
            const Http = new XMLHttpRequest();
            Http.open("GET", url + 'users/profile');
            Http.setRequestHeader('Authorization', 'Bearer ' + x);
            Http.send();
            Http.onreadystatechange = (e) => {
                setupGuides(Http.responseText, user);
            }
        }).catch(function (error) {
            // Handle error
        });
    } else {
        setupGuides2();
    }
})

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        // close the signup modal & reset form
        loginForm.reset();
    });

});