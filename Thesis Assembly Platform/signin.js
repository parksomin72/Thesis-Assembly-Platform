// JavaScript for sign-in form validation

function validateSignInForm() {
    var emailOrUsername = document.getElementById("emailOrUsername").value.trim();
    var password = document.getElementById("password").value.trim();

    // Check if email or username is empty
    if (emailOrUsername === "") {
        alert("Please enter your email or username");
        return false;
    }

    // Check if password is empty
    if (password === "") {
        alert("Please enter your password");
        return false;
    }

    // Add additional validation rules here if needed

    return true; // Form is valid
}
