const userSpec = document.querySelectorAll('.userSpec');
const usersAdd = document.querySelector('.usersAdd');
const logoutButton = document.querySelector('.logoutButton');
const deleteButton = document.querySelector('.deleteUser');


let users = localStorage.getItem('users');
let usersArr = JSON.parse(users);

const addUsersToDiv = (usersArr) => {

    usersArr.forEach(user=>{

        let userSpecDiv = document.createElement("div");
        userSpecDiv.classList.add('userSpec')
        let usernameP = document.createElement("p");
        usernameP.innerText = user.username;
        let emailP = document.createElement("p");
        emailP.innerText = user.email;
        let passwordP = document.createElement("p");
        passwordP.innerText = user.password;
    
        userSpecDiv.append(usernameP,emailP,passwordP);
        userSpecDiv.addEventListener('click', (e) => {
            if(!userSpecDiv.classList.contains('marked')){
                userSpecDiv.classList.add('marked');
                userSpecDiv.style.backgroundColor = '#162938'
                userSpecDiv.style.color = '#fff'
            } else {
                userSpecDiv.classList.remove('marked');
                userSpecDiv.style.backgroundColor = 'transparent'
                userSpecDiv.style.color = '#162938';
            }
        });
        usersAdd.append(userSpecDiv);
    })
}

addUsersToDiv(usersArr);

logoutButton.addEventListener('click', (e) => {
    window.location.href = 'Login.html'
})

deleteButton.addEventListener('click', (e) => {

    let usersList = JSON.parse(localStorage.getItem('users'));
    for(let i = 0; i < usersAdd.children.length; i++){
        if(usersAdd.children[i].classList.contains('marked')){
            usersList.splice(i, 1)
        }
    }
   localStorage.removeItem('users');
   localStorage.setItem('users',JSON.stringify(usersList));
    usersAdd.innerHTML = '';
    addUsersToDiv(usersList);
})


