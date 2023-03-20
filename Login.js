const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const buttonPopup = document.querySelector('.btn-login');
const iconClose = document.querySelector('.icon-close');
const registerUsername = document.querySelector('#registerUsername');
const registerEmail = document.querySelector('#registerEmail');
const registerPassword = document.querySelector('#registerPassword');
const registerSubmit = document.querySelector('#registerSubmit');
const userIcon = document.querySelector('#user-icon');
const emailIcon = document.querySelector('#email-icon');
const passwordIcon = document.querySelector('#password-icon');
const form = document.querySelector('form');
const formBtn = document.querySelector('#registerSubmit')
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');
const loginBtn = document.querySelector('.btn');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})
buttonPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

let newUser = {};
let freeUsername = false;
freeEmail = false;

registerUsername.addEventListener('focusout', () => {
    let usersList = JSON.parse(localStorage.getItem('users'));
    freeUsername = true;
    usersList.forEach(element => {
        if(registerUsername.value.trim() === element.username){
            freeUsername = false;
        }
    });
    if(freeUsername === true){
        userIcon.style.color = '#00CC66'
     if (registerUsername.value.trim() === ''){
            userIcon.style.color = '#162938';
        }
     } else {
        userIcon.style.color = '#ff0000'
    }
})

registerEmail.addEventListener('focusout', () => {
    let usersList = JSON.parse(localStorage.getItem('users'));
    freeEmail = true;
    usersList.forEach(element => {
        if(registerEmail.value.trim() === element.email){
            freeEmail = false;
        }
    })
    if(freeEmail === true){
        emailIcon.style.color = '#00CC66';
        if(registerEmail.value.trim() === ''){
            emailIcon.style.color = '#162938';
        }
    } else {
        emailIcon.style.color = '#ff0000'
    }
})
registerPassword.addEventListener('input', () => {
    const passwordLength = registerPassword.value.length;
    if(passwordLength < 1){
        passwordIcon.style.color = '#162938';
    } 
    if(passwordLength == 3){
        passwordIcon.style.color = '#ff0000';
    } 
    if(passwordLength == 4){
        passwordIcon.style.color = '#ff2c00'
    }
    if(passwordLength == 5){
        passwordIcon.style.color = '#ff5300'
    }
    if(passwordLength == 6){
        passwordIcon.style.color = '#ff7500'
    }
    if(passwordLength == 7){
        passwordIcon.style.color = '#ff9700'
    }
    if(passwordLength == 8){
        passwordIcon.style.color = '#ffc200'
    }
    if(passwordLength == 9){
        passwordIcon.style.color = '#fff700'
    }
    if(passwordLength == 10){
        passwordIcon.style.color = '#e2f800'
    }
    if(passwordLength == 10){
        passwordIcon.style.color = '#c5f900'
    }
    if(passwordLength == 11){
        passwordIcon.style.color = '#A8FA00'
    }
    if(passwordLength >= 12){
        passwordIcon.style.color = '#4DFF00'
    }
})

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let usersList = JSON.parse(localStorage.getItem('users'));

    newUser = {
        username : registerUsername.value.trim(),
        email : registerEmail.value.trim(),
        password : registerPassword.value.trim(),
        isAdmin : false
    }

    usersList.push(newUser);
    localStorage.setItem('users', JSON.stringify(usersList));
    console.log('New users ', usersList)
    alert('You successfully registred');
    window.location.reload();
})

const isValid = () => {
    let usersList = JSON.parse(localStorage.getItem('users'));

    if(loginEmail.value.trim() === '' && loginPassword.value.trim() === ''){
        alert('You must enter email and password');
        form.reset();
    }

    if(loginEmail.value.trim() == ''){
        alert('You must enter email');
    }
    if(loginPassword.value.trim() == ''){
        alert('You must enter password');
    }

    let emailExsist = false;
    let userExsist = false;
    
    usersList.forEach(element => {
        if(loginEmail.value.trim() === element.email){
            emailExsist = true;
            if(loginPassword.value.trim() === element.password){
                userExsist = true;
            } else {
                alert('You must enter correct password');
            }
        }
    })

    if(!emailExsist && !userExsist){
        alert('You must register first');
        form.reset();
        return;
    }
    return userExsist;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(isValid){
        if(loginEmail.value.trim() == 'admin@gmail.com'){
            window.location.href = 'userPage.html'
        } else {
            window.location.href = 'welcomeuser.html'
        }
    }

})


let usersList = [
    {
        username: 'Miljan',
        email: 'miljan@gmail.com',
        password: 'coding123',
        isAdmin: false
    }, 
    {
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'admin',
        isAdmin: true
    },
    {
        username: 'Gavrilo',
        email: 'gavrilo@gmail.com',
        password: 'king123',
        isAdmin: false
    }
]

if(localStorage.getItem('users') === null){
    localStorage.setItem('users', JSON.stringify(usersList));
}