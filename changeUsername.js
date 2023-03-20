const email = document.querySelector('#loginEmail');
const username = document.querySelector('#newUsername');
const confirmButton = document.querySelector('.btn');

confirmButton.addEventListener('click', (e) => {
    e.preventDefault();
    let usersList = JSON.parse(localStorage.getItem('users'));
    let emailExist = false;
    let emailIndex;

    usersList.forEach(element => {
        if(email.value.trim() == element.email){
            element.username = username.value.trim();
            emailExist = true;
            emailIndex = element;
        }

    });
    console.log(usersList)
})