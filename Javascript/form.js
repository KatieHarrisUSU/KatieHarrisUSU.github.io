// Validation errors enum
const errorCode = {
    empty: 0,
    invalid: 1
}

function selectDay() {
    // Blank option
    document.getElementById('day').innerHTML += "<option value='notSelected'></option>";

    // Day options
    for (var i = 1; i <= 31; i++) {
        var option = "<option value='" + i + "'>" + i + "</option>"
        document.getElementById('day').innerHTML += option;
    }
}

function selectYear() {
    // Blank option
    document.getElementById('year').innerHTML += "<option value='notSelected'></option>";

    // Year options
    for (var i = 2010; i >= 1970; i--) {
        var option = "<option value='" + i + "'>" + i + "</option>"
        document.getElementById('year').innerHTML += option;
    }
}

function loadFormData() {
    selectDay();
    selectYear();
}

function validateFormInput() {
    ////////////////////////////
    //    Validate Username   //
    ////////////////////////////
    const username = document.getElementById('username');
    var usernameErrorCode;

    // Check if username was entered
    if (username == "") {
        usernameErrorCode = errorCode.empty;
    }
    // Check that it only contain lowercase letters and numbers
    // and is between 4 and 12 characters 
    else if (/^[\da-z]+$/.test(username)) {
        usernameErrorCode = errorCode.invalid;
    }
    
    /////////////////////////////
    //      Validate Email     //
    /////////////////////////////
    const email = document.getElementById('email');
    var emailErrorCode;

    // Check if email was entered
    if (email == "") {
        emailErrorCode = errorCode.empty;
    }
    // Check that it contains @ and ends in .net, .com, .org or .edu 
    else if (/^[^@\s]+[@][^@\s]+((?:\.net)|(?:\.com)|(?:\.org)|(?:\.edu))$/.test(email)) {
        emailErrorCode = errorCode.invalid;
    }

    ///////////////////////////////
    //   Validate Phone Number   //
    ///////////////////////////////
    const phoneNumber = document.getElementById('phoneNumber');
    var phoneNumberErrorCode;

    // Check if phone number was entered
    if (phoneNumber == "") {
        phoneNumberErrorCode = errorCode.empty;
    }
    // Check that it contains 10 digits with hyphens
    else if (/^[\d]{3}-[\d]{3}-[\d]{4}$/.test(phoneNumber)) {
        phoneNumberErrorCode = errorCode.invalid;
    }

    ///////////////////////////////
    //      Validate Gender      //
    ///////////////////////////////
    const gender = document.getElementById('gender');
    var genderErrorCode;

    // Check if gender was selected
    if (gender == "") {
        genderErrorCode = errorCode.empty;
    }

    ///////////////////////////////
    //    Validate Birthdate     //
    ///////////////////////////////
    const birthdate = document.getElementById('birthdate');
    var birthdateErrorCode;

    // Check if birthdate was entered
    if (birthdate == "") {
        birthdateErrorCode = errorCode.empty;
    }

    ///////////////////////////////
    //   Validate Music Genre    //
    ///////////////////////////////
    const musicGenre = document.getElementById('musicGenre');
    var musicGenreErrorCode;

    // Check if music genre was selected
    if (musicGenre == "") {
        musicGenreErrorCode = errorCode.empty;
    }

    ///////////////////////////////
    //     Validate Password     //
    ///////////////////////////////
    const password = document.getElementById('password');
    var passwordErrorCode;

    // Check if password was entered
    if (password == "") {
        passwordErrorCode = errorCode.empty;
    }
    // Check that it contains at least 1 uppercase character, 
    // 1 lowercase character, 1 number and 1 special character
    else if (/^(?=.*[[:upper:]])(?=.*[[:lower:]])(?=.*[\d])(?=.*?[!@#\$&*~]).{4,}$/.test(password)) {
        passwordErrorCode = errorCode.invalid;
    }

    ////////////////////////////////
    //  Error Output Log Message  //
    ////////////////////////////////
    var validForm = true;

    // username field
    if (usernameErrorCode === errorCode.empty) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: red'>username</span></p>"
        );
        validForm = false;
    }
    else if (usernameErrorCode === errorCode.invalid) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: orange'>a valid username</span></p>"
        ); 
        validForm = false;
    }

    // email field
    if (emailErrorCode === errorCode.empty) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: red'>email</span></p>"
        );
        validForm = false;
    }
    else if (emailErrorCode === errorCode.invalid) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: orange'>a valid email</span></p>"
        ); 
        validForm = false;
    }

    // phone number field
    if (phoneNumberErrorCode === errorCode.empty) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: red'>phone number</span></p>"
        );
        validForm = false;
    }
    else if (phoneNumberErrorCode === errorCode.invalid) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: orange'>a valid phone number</span></p>"
        ); 
        validForm = false;
    }

    // password field
    if (passwordErrorCode === errorCode.empty) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: red'>password</span></p>"
        );
        validForm = false;
    }
    else if (passwordErrorCode === errorCode.invalid) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: orange'>a valid password</span></p>"
        );
        validForm = false; 
    }

    // gender field
    if (genderErrorCode === errorCode.empty) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: red'>gender</span></p>"
        );
        validForm = false;
    }
    
    // birthdate field
    if (birthdateErrorCode === errorCode.empty) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: red'>birthdate</span></p>"
        );
        validForm = false;
    }

    // music genres field
    if (musicGenreErrorCode === errorCode.empty) {
        document.getElementById('form-validations').innerHTML += (
            "<p>Please enter <span style='color: red'>favorite music genre</span></p>"
        );
        validForm = false;
    }

    // Return whether form inputs are valid or not
    return validForm;
}

function doPasswordsMatch() {
    const password = document.getElementById('password');
    const passwordCheck = document.getElementById('passwordCheck');

    // Check that it is the same as the first password entered
    if (passwordCheck != password) {
        alert('Passwords do not match');
        return false;
    }
    else {
        return true;
    }
}

function onSubmit() {
    let valid = validateFormInput();
    let passwordsMatch = doPasswordsMatch();

    if(!valid) {
        console.log('invalid form');
    }
    // else if(!passwordsMatch) {
    //     alert('Passwords do not match');
    // }
    else {
        document.location.href="../";
    }
}