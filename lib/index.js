// // 1. SELECT THE ELEMENT
// const btn = document.querySelector('.btn.btn-warning')
// console.log(btn);
// // 2. BIND AN EVENT LISTENER
// btn.addEventListener('click', (event) => {
//   event.currentTarget.innerHTML = 'Clicked!'
//   event.currentTarget.setAttribute('disabled', true)
// })


// // TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'
// FETCH (HTTP REQUEST THROUGH JS)

// GET REQUEST

// fetch(url) // DO THE HTTP REQUEST
//   .then(response => response.json()) // PARSE THE RESPONSE
//   .then((data) => {
//     console.log(data);
// })



// 1. SELECT THE ELEMENTS
const btn = document.querySelector('.btn.btn-warning');
const header = document.querySelector('#activity');
// 2. ADD AN EVENT LISTENER TO THE BUTTON
btn.addEventListener('click', (event) => {
  // 3. When click
  // 3.1 make the api call
  fetch('https://www.boredapi.com/api/activity/') // DO THE HTTP REQUEST
    .then(response => response.json()) // PARSE THE RESPONSE
    .then((data) => {
      // 3.2 display the activity in the page
      // data = {
      //   "activity": "Learn Express.js",
      //    "accessibility": 0.25,
      //    "type": "education",
      //    "participants": 1,
      //    "price": 0.1,
      //    "link": "https://expressjs.com/",
      //    "key": "3943506"
      // }
      console.log(data);
      header.innerText = data.activity
    })
})
