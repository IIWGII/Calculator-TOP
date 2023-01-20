const numbers = document.querySelectorAll('.nbr');
const result = document.querySelector('.result');
const equals = document.getElementById('equals');
const multiply = document.getElementById('multiplication');
const subtraction = document.getElementById('subtraction');
const division = document.getElementById('division');
const add = document.getElementById('addition');
const clear = document.getElementById('clear');
const currentOperations = document.getElementById('current-operations');


numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (!e.target.classList.contains('operation')) {
            
            currentOperations.innerText += e.target.innerText;
        }
        });
});

