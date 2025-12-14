document.addEventListener('keydown', function(event) {
    const key = event.key;

    if ('0123456789/*-+'.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault(); 
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

function checkEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        calculate();
    }
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; 
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); 
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error'; 
    }
}