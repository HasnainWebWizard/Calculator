let input = document.querySelector('#inputbox');
let btn = document.querySelectorAll('.btns');
let ac = document.querySelector('#AC');
let de = document.querySelector('#DE');
let equal = document.querySelector('#equal');


btn.forEach(button => {
    button.addEventListener('click', () => {
        input.value = input.value + button.value;
    })
});

ac.addEventListener('click', () => {
    input.value = 0;
});

de.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);

});

equal.addEventListener('click', () => {
    input.value = eval(input.value);
})

// let multiply = document.querySelector('#multi');
// let remainder = document.querySelector('#remainder');
// let divide = document.querySelector('#divide');

// multiply.addEventListener('click', () => {
//     input.value = input.value + '*';
// })

// remainder.addEventListener('click', () => {
//     input.value = input.value + '%';
// })

// divide.addEventListener('click', () => {
//     input.value = input.value + '/';
// })


//For keyboard key's
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Allow numbers and basic operators
    if (!isNaN(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        input.value += key;
    }

    // Enter or = for evaluation
    else if (key === 'Enter' || key === '=') {
        try {
            input.value = eval(input.value);
        } catch {
            input.value = 'Error';
        }
    }

    // Backspace for delete
    else if (key === 'Backspace') {
        input.value = input.value.slice(0, -1);
    }

    // Escape for AC
    else if (key === 'Escape') {
        input.value = '';
    }
});
