const calculator = document.querySelector('.calculator')

$('.calc_keys').click(function(e) {
    if ($( e.target ).is(":button")) {
        const key = e.target;
        const action = key.dataset.action;
        const display = document.getElementById('calcDisplay');
        const displayedNum = display.textContent;
        const keyContent = key.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        // if no dataset, it would be a number
        if(!action){
            console.log(key.textContent);
            if(displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
            }else{
                display.textContent = displayedNum + keyContent;
            }
        }
        // if there is a dataset
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
            console.log('calculation keys pressed');
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }
        if(action === 'delete'){
            console.log('delete key pressed');
        }
        if(action === 'clear'){
            console.log('reset key pressed');
        }
        if(action === 'equal'){
            console.log('equal key pressed');
            const secondValue = displayedNum
        }
        if(action === 'decimal'){
            display.textContent = displayedNum + '.';
        }

    }
});

