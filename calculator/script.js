document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Check if the key is a number or an operator
    if ('0123456789/*-+'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); // Prevent form submission
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

function checkEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        calculate();
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the clicked value to the display
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Display error if evaluation fails
    }
}