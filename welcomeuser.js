const logout = document.querySelector('#logout');
const feed = document.querySelector("#feed");
const centerMsg = document.querySelector(".centerMsg");
const masterDiv = document.querySelector('#masterDiv');
const firends = document.querySelector("#friends");

logout.addEventListener('click', (e) => {
    window.location.href = 'Login.html'
})

feed.addEventListener("click",async (e)=>{
    e.preventDefault();
    centerMsg.style.display = 'none';

    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postsData = await data.json();
    masterDiv.innerHTML = ''
    postsData.forEach(post => {
        masterDiv.innerHTML += `
        <div class='cardsHolder'>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        </div>
        `
    });
})



firends.addEventListener("click",async (e)=>{
    e.preventDefault();
    centerMsg.style.display = 'none';

    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    const friednsData = await data.json();
    masterDiv.innerHTML = ''
    friednsData.forEach(user => {
        masterDiv.innerHTML += `
        <div class='cardsHolder'>
        <h3>${user.name}</h3>
        <p>${user.username}</p>
        <p>${user.email}</p>
        <p>${user.address.street}</p>
        <p>${user.address.suite}</p>
        <p>${user.address.city}</p>
        <p>${user.phone}</p>
        </div>
        `
    });
})

// [
//     {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//         "street": "Hoeger Mall",
//         "suite": "Apt. 692",
//         "city": "South Elvis",
//         "zipcode": "53919-4257",
//         "geo": {
//           "lat": "29.4572",
//           "lng": "-164.2990"
//         }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//         "name": "Robel-Corkery",
//         "catchPhrase": "Multi-tiered zero tolerance productivity",
//         "bs": "transition cutting-edge web services"
//       }
//     }
//   ]