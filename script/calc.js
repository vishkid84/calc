$('.calc_keys').click(function(e) {
    if ($( e.target ).is(":button")) {
        const key = e.target;
        const action = key.dataset.action;
        if(!action){
            console.log('number key pressed');
        }
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

