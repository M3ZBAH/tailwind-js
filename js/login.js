//step-1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2: get the email address inside the email input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;//always remember to use .value to get text from input field

    //step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //
    console.log(email);
    console.log(password);

    //step-4: Verify email & password. Just for learnng purpose
    if (email === 'xyz@gmail.com' && password === '12345') {
        //console.log('Valid User');
        document.location.href = 'bank.html';
    }
    else {
        alert('Invalid User');
    }
})