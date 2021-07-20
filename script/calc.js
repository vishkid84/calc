$('.calc_keys').click(function(e) {
    if ($( e.target ).is(":button")) {
        const key = e.target;
        const action = key.dataset.action;
        const display = document.getElementById('calcDisplay');
        const displayedNum = display.textContent;
        // if no dataset, it would be a number
        if(!action){
            console.log(key.textContent);
            if(displayedNum == 0){
                display.textContent = key.textContent;
            }else{
                display.textContent = displayedNum + key.textContent;
            }
        }
        // if there is a dataset
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
            console.log('calculation keys pressed');
        }
        if(action === 'delete'){
            console.log('delete key pressed');
        }
        if(action === 'clear'){
            console.log('reset key pressed');
        }
        if(action === 'equal'){
            console.log('equal key pressed');
        }
        if(action === 'decimal'){
            console.log('decimal key pressed');
        }

    }
});

