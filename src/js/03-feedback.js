// Import the throttle function from the lodash library
import throttle from 'lodash/throttle';

// Check if the browser supports local storage
if (typeof Storage !== 'undefined') {
  // Select the feedback form and its input fields
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageTextarea = form.querySelector('textarea[name="message"]');

  // Retrieve the saved state from local storage or initialize an empty object
  const savedState =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  // Populate the email and message fields with saved values if available
  emailInput.value = savedState.email || '';
  messageTextarea.value = savedState.message || '';

  // Create a throttled function to save form state to local storage with a 500ms delay
  const saveStateWithThrottle = throttle(() => {
    // Create an object with the current email and message values
    const state = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    // Store the state object as a JSON string in local storage
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
  }, 500);

  // Add input event listeners to email and message fields to trigger state saving
  emailInput.addEventListener('input', saveStateWithThrottle);
  messageTextarea.addEventListener('input', saveStateWithThrottle);

  // Add a submit event listener to the form
  form.addEventListener('submit', event => {
    event.preventDefault();

    // Remove the saved state from local storage
    localStorage.removeItem('feedback-form-state');

    // Get the current values of the email and message fields
    const email = emailInput.value;
    const message = messageTextarea.value;

    // Log the email and message values to the console
    console.log({ email, message });

    // Clear the email and message fields after submitting the form
    emailInput.value = '';
    messageTextarea.value = '';
  });
} else {
  // If local storage is not supported, display an error message in the console
  console.error('Local storage is not supported in this browser.');
}
