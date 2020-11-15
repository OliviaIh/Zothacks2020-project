const fetch = require("node-fetch");
// const myList = document.querySelector('ul');

function fetchUserData(){
  let promise = fetch("https://api.edamam.com/search?app_id=5b19fdf7&app_key=eafbd544aa8011983b3ee231e40a8c86&q=chicken", {
    headers: {
      "Accept-Encoding": "gzip"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data));
}



function getInput(){
  var ing1 = document.getElementByID('ingredient1')
  var ing2 = document.getElementByID('ingredient2')
  var ing3 = document.getElementByID('ingredient3')
  var ing4 = document.getElementByID('ingredient4')
  var ing5 = document.getElementByID('ingredient5')
}

//document.querySelector('#recipe-output')

$(document).ready(function() {
  fetchUserData()
  getInput()
});


//PRINT THE RECIPES HERE

// .then(json => console.log(json));
// .then(data => document.write(data))

// .catch(error => console.error(error));

//i put chicken in as an example search


// var obj = JSON.parse(data);
// document.getElementById("demo").innerHTML = data + ", " + obj.age;

// const myRequest = new Request('products.json');

// fetch(myRequest)
//   .then(response => response.json())
//   .then(data => {
//     for (const product of data.products) {
//       let listItem = document.createElement('li');
//       listItem.appendChild(
//         document.createElement('strong')
//       ).textContent = product.Name;
//       listItem.append(
//         ` can be found in ${
//           product.Location
//         }. Cost: `
//       );
//       listItem.appendChild(
//         document.createElement('strong')
//       ).textContent = `£${product.Price}`;
//       myList.appendChild(listItem);
//     }
//   })
//   .catch(console.error);

// fetch('https://api.edamam.com/search')
//   .then(res => res.text())
//   .then(body => console.log(body));

// fetch('https://api.edamam.com/search')
//   .then(res => res.json())
//   .then(json => console.log(json));

//npm i node-fetch --save