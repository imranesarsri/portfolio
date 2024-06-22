function validateField(field, messageField, isEmail = false) {
    if (!field.value) {
        field.style.border = "2px solid red";
        messageField.innerHTML = "This field is required.";
        return false;
    } else if (isEmail && !validateEmail(field.value)) {
        field.style.border = "2px solid red";
        messageField.innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        field.style.border = "";
        messageField.innerHTML = "";
        return true;
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sendEmail() {
    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let subjectField = document.getElementById("subject");
    let phoneField = document.getElementById("phone");
    let messageField = document.getElementById("message");

    let nameMessage = document.getElementById("nameMessage");
    let emailMessage = document.getElementById("emailMessage");
    let subjectMessage = document.getElementById("subjectMessage");
    let messageMessage = document.getElementById("messageMessage");

    let isValid = true;

    isValid &= validateField(nameField, nameMessage);
    isValid &= validateField(emailField, emailMessage, true);
    isValid &= validateField(subjectField, subjectMessage);
    isValid &= validateField(messageField, messageMessage);

    if (isValid) {
        let parameters = {
            from_name: nameField.value,
            form_email: emailField.value,
            form_subject: subjectField.value,
            form_phone: phoneField.value,
            message: messageField.value,
        };

        emailjs.send("service_a7epvt4", "template_5tx71us", parameters)
            .then(() => {
                alert('Thank you for your message. I appreciate your time and will get back to you soon.');
            })
            .catch(error => {
                console.error('Failed to send email:', error);
                alert('Failed to send your message. Please try again later.');
            });
    }
}
