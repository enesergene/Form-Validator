var form = document.getElementById('form');
var username = document.getElementById('username');
var password = document.getElementById('password');
var repassword = document.getElementById('repassword');
var mail = document.getElementById('mail');
var tel = document.getElementById('telefon');

function success(input){
    input.className = 'form-control is-valid'
    
};
function error(input,message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback'
};

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(mail.value)){
        success(mail);
    }else {
        error(mail,"Enter a valid mail.")
    }
}

function checklength(input,min,max){
    if(input.value.length < min){
        error(input,`${input.id} has to be min ${min} characters.`);
    }else if (input.value.length>max){
        error(input,`${input.id} has to be max ${max} characters.`);
    }else{
        success(input);
    }
}

function password_match(input1,input2){
    if(input1.value != input2.value){
        error(input2,"Passwords are not matching");
    }
}

function tel_check(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(tel,"Phone number has to be 10 digits.")
    }
}

//input.value unutma.
function checkrequired(inputs){
    inputs.forEach(function(input){
        if(input.value == ''){
            error(input,`${input.id} is required.`)
        }else{
            success(input);
        }
    })
}

form.addEventListener('submit',function(e){

    e.preventDefault();

  checkrequired([username,password,repassword,tel]);
  validateEmail(mail);
  checklength(username,7,15);
  password_match(password,repassword);
  tel_check(tel);


})