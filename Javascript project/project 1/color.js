const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e) {
        
        if(e.target.id ==='gray'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='palevioletred'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
    });
    
});
