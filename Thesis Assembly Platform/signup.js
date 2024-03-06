// JavaScript for sign-up form validation

async function validateForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var username = document.getElementById("username").value.trim();
    var school = document.getElementById("school").value.trim();
    var email = document.getElementById("email").value.trim();
    var confirmEmail = document.getElementById("confirmEmail").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var gender = document.getElementById("gender").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var age = document.getElementById("age").value.trim();

    // Check if any field is empty
    if (firstName === "" || lastName === "" || username === "" || school === "" || email === "" || confirmEmail === "" || password === "" || confirmPassword === "" || gender === "" || phoneNumber === "" || age === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Check if emails match
    if (email !== confirmEmail) {
        alert("Emails do not match");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Add additional client-side validation rules here 

    // Send form data to backend for email confirmation
    const formData = {
        firstName,
        lastName,
        username,
        school,
        email,
        password,
        gender,
        phoneNumber,
        age
    };

    try {
        const response = await fetch('http://yourbackenddomain.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Form data sent successfully, show confirmation message to user
            alert("Registration successful! Please check your email for confirmation.");
            return true;
        } else {
            // Failed to send form data to backend
            alert("Failed to register. Please try again later.");
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
        return false;
    }
}