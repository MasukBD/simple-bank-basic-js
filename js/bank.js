document.getElementById('submit-button').addEventListener('click', function () {
    // get user id 
    const userIdField = document.getElementById('user-id');
    const userId = userIdField.value;
    // get password 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // check user id and password 
    if (userId == 'masuk@scu.com' && password == 'masuk') {
        window.location.href = 'banking.html';
    }
})