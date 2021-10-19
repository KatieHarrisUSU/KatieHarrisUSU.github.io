// Validation errors enum
const errorCode = {
    valid: 0,
    empty: 1,
    invalid: 2
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
    const username = document.getElementById('username').value;
    var usernameErrorCode = errorCode.valid;

    // Check if username was entered
    if (username === "") {
        usernameErrorCode = errorCode.empty;
    }
    // Check that it only contain lowercase letters and numbers
    // and is between 4 and 12 characters 
    else if (/^[\da-z]{4,12}$/.test(username) === false) {
        usernameErrorCode = errorCode.invalid;
    }
    
    /////////////////////////////
    //      Validate Email     //
    /////////////////////////////
    const email = document.getElementById('email').value;
    var emailErrorCode = errorCode.valid;

    // Check if email was entered
    if (email === "") {
        emailErrorCode = errorCode.empty;
    }
    // Check that it contains @ and ends in .net, .com, .org or .edu 
    else if (/^[^@\s]+[@][^@\s]+((?:\.net)|(?:\.com)|(?:\.org)|(?:\.edu))$/.test(email) === false) {
        emailErrorCode = errorCode.invalid;
    }

    ///////////////////////////////
    //   Validate Phone Number   //
    ///////////////////////////////
    const phoneNumber = document.getElementById('phoneNumber').value;
    var phoneNumberErrorCode = errorCode.valid;

    // Check if phone number was entered
    if (phoneNumber === "") {
        phoneNumberErrorCode = errorCode.empty;
    }
    // Check that it contains 10 digits with hyphens
    else if (/^[\d]{3}-[\d]{3}-[\d]{4}$/.test(phoneNumber) === false) {
        phoneNumberErrorCode = errorCode.invalid;
    }

    ///////////////////////////////
    //      Validate Gender      //
    ///////////////////////////////
    var genderErrorCode = errorCode.valid;

    // Check if a gender was selected
    if (!document.getElementById('female').checked &&
        !document.getElementById('male').checked &&
        !document.getElementById('other').checked) {
        genderErrorCode = errorCode.empty;
    }

    ///////////////////////////////
    //    Validate Birthdate     //
    ///////////////////////////////
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const year = document.getElementById('year').value;
    var birthdateErrorCode = errorCode.valid;

    // Check if birthdate was entered
    if (month === "notSelected" || 
        day === "notSelected" || 
        year === "notSelected") {
        birthdateErrorCode = errorCode.empty;
    }

    ///////////////////////////////
    //   Validate Music Genre    //
    ///////////////////////////////
    var musicGenreErrorCode = errorCode.valid;

    // Check if music genre was selected
    if (!document.getElementById('pop').checked &&
        !document.getElementById('hiphop').checked &&
        !document.getElementById('jazz').checked &&
        !document.getElementById('rock').checked &&
        !document.getElementById('classical').checked &&
        !document.getElementById('country').checked) {
        musicGenreErrorCode = errorCode.empty;
    }

    ///////////////////////////////
    //     Validate Password     //
    ///////////////////////////////
    const password = document.getElementById('password').value;
    var passwordErrorCode = errorCode.valid;

    // Check if password was entered
    if (password === "") {
        passwordErrorCode = errorCode.empty;
    }
    // Check that it contains at least 1 uppercase character, 
    // 1 lowercase character, 1 number and 1 special character
    else if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*?[!@#\$&*~]).{4,}$/.test(password) === false) {
        passwordErrorCode = errorCode.invalid;
    }

    ////////////////////////////////
    //  Error Output Log Message  //
    ////////////////////////////////
    var validForm = true;
    var formErrors = document.getElementById('form-validations');

    // username field
    if (usernameErrorCode === errorCode.empty) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please enter <span style='color: red'>username</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }
    else if (usernameErrorCode === errorCode.invalid) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please enter <span style='color: orange'>a valid username</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }

    // email field
    if (emailErrorCode === errorCode.empty) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please enter <span style='color: red'>email</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }
    else if (emailErrorCode === errorCode.invalid) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please enter <span style='color: orange'>a valid email</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }

    // phone number field
    if (phoneNumberErrorCode === errorCode.empty) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please enter <span style='color: red'>phone number</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }
    else if (phoneNumberErrorCode === errorCode.invalid) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please enter <span style='color: orange'>a valid phone number</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }

    // password field
    if (passwordErrorCode === errorCode.empty) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please enter <span style='color: red'>password</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }
    else if (passwordErrorCode === errorCode.invalid) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please enter <span style='color: orange'>a valid password</span>";
        formErrors.appendChild(newError);
        validForm = false; 
    }

    // gender field
    if (genderErrorCode === errorCode.empty) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please select <span style='color: red'>gender</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }
    
    // birthdate field
    if (birthdateErrorCode === errorCode.empty) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please select <span style='color: red'>birthdate</span>";
        formErrors.appendChild(newError);
        validForm = false;
    }

    // music genres field
    if (musicGenreErrorCode === errorCode.empty) {
        let newError = document.createElement('p');
        newError.innerHTML += "Please select <span style='color: red'>favorite music genre(s)</span>";
        formErrors.appendChild(newError);
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
        return false;
    }
    
    return true;
}

function onSubmit() {
    // Clear currently displayed errors (if any)
    var formErrors = document.getElementById('form-validations');
    formErrors.innerHTML = "";

    // Complete form validation
    let valid = validateFormInput();
    let passwordsMatch = doPasswordsMatch();

    if(!valid) {
        console.log('invalid form inputs');
    }
    else if(!passwordsMatch) {
        alert('Passwords do not match');
    }
    else {
        document.location.href="../";
    }
}

function onClear() {
    // Clear currently displayed errors (if any)
    var formErrors = document.getElementById('form-validations');
    formErrors.innerHTML = "";
}