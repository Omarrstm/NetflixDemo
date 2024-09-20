function sendResetInstructions() {
    var resetOption = document.querySelector('input[name="resetOption"]:checked').value;
    var inputContainer = document.getElementById('inputContainer');
    var resetStatus = document.createElement('div');

    // Clear previous content
    inputContainer.innerHTML = '';

    // Add input based on reset option
    var inputLabel = document.createElement('label');
    var input = document.createElement('input');
    input.type = resetOption === 'email' ? 'email' : 'tel';
    input.placeholder = resetOption === 'email' ? 'Enter your email' : 'Enter your phone number';
    input.required = true;

    inputLabel.appendChild(input);
    inputContainer.appendChild(inputLabel);

    // Simulated success response
    var successMessage = `Instructions for password reset via ${resetOption} sent successfully. Check your ${resetOption}.`;

    // Simulated error response
    var errorMessage = "Unable to send reset instructions. Please try again.";

    // Display reset status
    resetStatus.textContent = successMessage;
    inputContainer.appendChild(resetStatus);

    // Styling
    resetStatus.style.color = '#008000';
    resetStatus.style.marginTop = '10px';
}
