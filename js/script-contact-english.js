
// IFFE that contains a formValidation function including error messages
(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-form-input__email');
  let messageInput = document.querySelector('#contact-form-input__message');
  let phoneInput = document.querySelector('#contact-form-input__tel');

//function used by later functions to create the error messages
function showErrorMessage(input, message) {
  // the .input-wrapper
  let container = input.parentElement;

  // check and remove existing error
  let error = container.querySelector('.error-message');
  if (error) {
    container.removeChild(error);
  }
  // add error if the message is not empty
  if (message) {
    let error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    container.appendChild(error);
  }
}

// function to validate the email input field
function validateEmail() {
  let value = emailInput.value;

  if (!value) {
    showErrorMessage(emailInput, 'Please inpur ypur email adress');
    return false;
  }

  if (value.indexOf('@') === -1) {
    showErrorMessage(emailInput, 'Please enter a valid email adress');
    return false;
  }

  if (value.indexOf('.') === -1) {
    showErrorMessage(emailInput, 'Please input a valid email adress');
  }

  showErrorMessage(emailInput, null);
  return true;
}

// function to validate the message field
function validateMessage() {
  let value = messageInput.value;

  if (!value) {
    showErrorMessage(messageInput, 'Please input your message');
    return false;
  }

  if (value.length < 10 || value.length > 500) {
    showErrorMessage(messageInput, 'Please input a valid message');
    return false;
  }

  showErrorMessage(messageInput, null);
  return true;
}

function validatePhone() {
  let value = phoneInput.value;

  if (!value) {
    return true;
  }

  if (value.length < 7) {
    showErrorMessage(phoneInput, 'Please input a valid phone number including the area code');
    return false;
  }

  showErrorMessage(phoneInput, null);
  return true;
}

function validateForm() {
  let isValidEmail = validateEmail();
  let isValidMessage = validateMessage();
  let isValidPhone = validatePhone();

  return isValidEmail && isValidPhone && isValidMessage;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert ('Your message was successfully sent');
    // add a way for the message to be sent to designated email adress!!!!!
  }

  emailInput.addEventListener('input', validateEmail);
  phoneInput.addEventListener('input', validatePhone);
  messageInput.addEventListener('input', validateMessage);
})

})()
