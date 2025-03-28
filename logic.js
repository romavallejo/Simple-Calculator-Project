const disp = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let accumulator = [];
let accJoin = '';

function calculation(button) {
    const val = button.textContent;
    if (val === "AC") {
        accumulator = [];
        disp.textContent = '.';
    } else if (val === "=") {
        disp.textContent = eval(accJoin);
    } else {
        accumulator.push(val);
        accJoin = accumulator.join('');
        disp.textContent = accJoin;
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculation(button)));