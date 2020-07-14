

// document

// let headerElem =  document.getElementById('title1')
// headerElem.classList.add('changeColor')
// console.log(headerElem.classList)

// headerElem.style.marginLeft = '50px';

// margin-left: 20px


// let paragraphs = document.getElementsByClassName('paragraph')
// console.log(paragraphs)

// let headerElem = document.querySelector('.products .title2')
// console.log(headerElem)

// paragraphs.forEach(function(paragraph){
//     let str = paragraph.innerText
//     str = str.toUpperCase()
//     //innerHTML allows to add html content within a node
//     paragraph.innerHTML = `<div>${str}</div>`
//     console.log(str)
// })


// let title  = document.querySelector('h1')
// console.log(title) // 


//-----------------------------------------------
//---------Activity------------------------------
//-----------------------------------------------

// 1: Get the node with the  main title

// let mainTitle = document.querySelector('h1')
//console.log(mainTitle)

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

//console.log(mainTitle.innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

//let fruits = document.getElementsByClassName('fruit-item')
//console.log(fruits)

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

// let veggies = document.querySelectorAll('.veggie-item')

// veggies.forEach((veggie) => {
//    // console.log(veggie.innerText)
// })

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

//let sub = document.querySelector('.list-veggies h2')
// let sub = document.getElementsByTagName('h2')
// console.log(sub[1].innerText)

// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

// let elem = document.querySelector('.list-fruits h2')
// elem.setAttribute('id', 'fruit-title')

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// let fruits = document.querySelectorAll('.fruit-item')

// fruits.forEach(function(fruit, index){
//     if (index % 2 === 0){
//         fruit.classList.add('best-fruit')
//     }  
// })


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

// let veggiesList = document.querySelector('.veggies')
// veggiesList.classList.remove('veggies')

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

// veggies.forEach((veggie) => {
//     veggie.classList.add('veggie-love')
// })

// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// veggies.forEach((veggie) => {
//     if (veggie.innerText == 'Spinach'){
//         veggie.classList.remove('veggie-item')
//     }
// })

// => ... <li class="veggie-love">Spinach</li>

//-----------------------------------------------
//---------Activity END--------------------------
//-----------------------------------------------




let form = document.querySelector('form')


form.addEventListener('submit', function(event){
   event.preventDefault(); 
   console.log('Submit triggered')
   let name = document.querySelector('#fruit-name')
   console.log(name.value)

   let fruits = document.querySelector('.fruits')
  // fruits.innerHTML = name.value

   let myNewLi = document.createElement('li')
   myNewLi.innerHTML = `${name.value} <button class="fruit-delete-btn">Delete</button>`;
   myNewLi.classList.add('fruit-item')
   console.log(myNewLi)
   fruits.appendChild(myNewLi)
   let btn = myNewLi.querySelector('.fruit-delete-btn')
   addDeleteEventListener(btn)
})

function addDeleteEventListener(elem){
    elem.addEventListener('click', function(event){
        let delElement = event.target.parentNode
        delElement.parentNode.removeChild(delElement)
    })
}

let btns = document.querySelectorAll('.fruit-delete-btn') 

btns.forEach(function(btn){
    addDeleteEventListener(btn)
})










