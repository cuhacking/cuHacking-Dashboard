// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
        user.getIdToken(/* forceRefresh */ true).then(function (x) {
            // Send token to your backend via HTTPS
            // ...
            const Http = new XMLHttpRequest();
            console.log(url);

            console.log(url);

            Http.open("GET", url + 'users/profile');
            console.log(x);
            Http.setRequestHeader('Authorization', 'Bearer ' + x);
            Http.send();

            Http.onreadystatechange = (e) => {
                setupGuides(Http.responseText);
            }
        }).catch(function (error) {
            // Handle error
        });
    } else {
        console.log('user logged out');
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