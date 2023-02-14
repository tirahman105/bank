// step -1 : add click event listener with submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    
console.log("clicked");
    // step 2: get the email address inside the input field
    //  always remember to get text from an input field , use value. 
    
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    
//     step-3 : get password 
//  3.a set id on the html element
//  3.b get the element
//  3.c get the value from the element

    const userPassword = document.getElementById('user-password');
    const pass = userPassword.value;
    console.log(email,pass);

    // DANGER: do not verify email and password on client side

    // step -4 : verify email and password
    if(email == 'tirahman105@gmail.com' && pass == '123456'){
        // console.log('valid user');
        window.location.href = 'bank.html';
    } else{
        // console.log("invalid user");
        alert('You forgot your email or password');
    }

})