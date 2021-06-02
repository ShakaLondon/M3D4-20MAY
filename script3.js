
let inputObj

let favArray = []

let favNum = 0

let cartList = []


function pushToCard (input) {

const eachCard = document.querySelectorAll("div.card")

// SELECT CARDS

console.log(eachCard)

for (x = 0; x < eachCard.length; x++) {
// ON EACH CARD

const inputImage = input[x].img

// GET IMAGE DATA FROM JSON

const imgPrice = input[x].price

const poundprice = new Intl.NumberFormat('en-US',
{ style: 'currency', currency: 'USD' }
).format(imgPrice)

console.log(poundprice)

//GET BOOK PRICE

const bookTitle = input[x].title

console.log(inputImage)

const cardID = input[x].asin

console.log(cardID)

// let card = document.querySelector(`.${eachCard[x]}`)

const imgElem = document.createElement('img')

// CREATE IMAGE ELEMENT

imgElem.src = inputImage

imgElem.alt = 'splash-base-image'

imgElem.height = '300'

imgElem.width = '100'

imgElem.classList.add('bd-placeholder-img', 'card-img-top',)

const svg = eachCard[x].firstElementChild

// SELECT ALL SVG ELEMENTS

eachCard[x].replaceChild(imgElem, svg)

const smallText = eachCard[x].querySelector('small')

smallText.innerHTML = poundprice

const titleText = eachCard[x].querySelector('p')

titleText.innerHTML = bookTitle

// CREATE SPAN FOR ID

const spanID = document.createElement('span')

spanID.classList.add('hide', 'bookID')

spanID.innerHTML = cardID

eachCard[x].appendChild(spanID)

console.log(eachCard[x])

const groupButton = document.querySelectorAll('div.btn-group')

// ADD TO FAVOURITE EVENT LISTENER

const secondButton = eachCard[x].querySelectorAll('button')

secondButton[1].addEventListener('click', hideCard)

secondButton[0].addEventListener('click', addToCart)


}
}

function refreshCart (e) {
    // const spanHiddenID = document.querySelectorAll('span.hide')

        // console.log(cartList)

        // cartList.forEach(ID => {

        // let listID = document.querySelector(ID)

        // console.log(listID)})

        const button = e.currentTarget

        console.log(button)

        const div = button.parentElement

        console.log(div)

        const cardBody = div.parentElement

        console.log(cardBody)

        const divCardBody = cardBody.parentElement

        console.log(divCardBody)

        const cardHead = divCardBody.parentElement

        const img = cardHead.children[0]

        console.log(img)

        const bookID = divCardBody.nextElementSibling

        console.log(bookID)

        const hiddenID = bookID.innerHTML

        const bookTitle = divCardBody.children[0]

        console.log(bookTitle)

        let priceP = cardBody.lastElementChild

        console.log(priceP)

        // let includedInArray = cartList.includes(hiddenID)

        // if (includedInArray !== true) {

            // const cardBody = span.previousElementSibling

            console.log(cardBody)

            const price = priceP.innerHTML

            // const titleP = elemTitleP.children[0]

            const title = bookTitle.innerHTML

            const shortTitle = title.slice(0, 50)

            // const img = cardBody.previousElementSibling

            console.log(img)

              // <div class="d-flex flex-row ml-0 mr-0 align-items-center relative margin-top">

            let cartElement = `
            <div class="row cartItem d-block border-top border-white"></div>

            <div class="col-2 d-inline-flex align-items-center justify-content-center mx-auto px-auto pl-4 imgDiv">
              
            </div> 
            <div class="col-7 d-inline-flex ml-0 px-auto mx-auto py-auto">
              <span class="d-flex">
                 <p class="text-white ml-0 h7 py-2 mb-0">${shortTitle}</p>
              </span>
            </div> 
            <form class="d-flex container-fluid my-0">
            <div class="col-3 d-inline-flex mx-auto pr-0 justify-content-center py-0 my-0">
            <div class="form-group my-0 py-0">
              <label for="itemnumber" class="text-center h7 text-warning">QTY</label>
              <select class="form-control form-contol-sm" id="itemnumber">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            <div>
              <span>
                <p class="text-white ml-3 h7 py-2 mx-auto mb-0 itemPrice">${price}</p>
              </span>

          </div>
          <form>`

        const imgClone = img.cloneNode()

        const imgCloneClass = ['bd-placeholder-img', 'card-img-top']

        imgClone.classList.remove(...imgCloneClass)

        imgClone.classList.add('cartImage', `${hiddenID}`)

        console.log(imgCloneClass)

          const newCartElement = document.createElement('div')

          newCartElement.classList.add("d-flex", "flex-row", "ml-0", "mr-0", "align-items-center", "relative", "margin-top")

          newCartElement.innerHTML = cartElement

          const imgDiv = newCartElement.querySelector('div.imgDiv')

          imgDiv.appendChild(imgClone)

          const cartBxHead = document.querySelector('div.overlay-content')

          const cartBx = cartBxHead.children[1]

          cartBx.appendChild(newCartElement)

          const priceElement = document.getElementById('priceTotal')

          const itemPriceArray = document.querySelectorAll('.itemPrice')

          let costArray = []

          itemPriceArray.forEach(item => {
              let price = item.innerHTML
              let number = price.slice(1)
              let numPrice = Number(number)
              costArray.push(numPrice)
          })

          console.log(costArray)

          const reducer = (accumulator, currentValue) => accumulator + currentValue;



          let itemPriceSum = costArray.reduce(reducer)

          priceElement.innerHTML = `$${itemPriceSum.toFixed(2)}`


            
        // }
    

}

function addToCart (e) {
    const btnGroup = e.currentTarget.parentElement

    const cardBodydiv = btnGroup.parentElement

    const cardBody = cardBodydiv.parentElement

    console.log(cardBody)

    const spanbookID = cardBody.nextElementSibling

    console.log(spanbookID)

    const bookID = spanbookID.innerHTML

    console.log(bookID)

    const spanList = document.querySelectorAll('span.hide')

    console.log(spanList)

    let duplicatecheck = cartList.includes(bookID)

    let bookIndex = cartList.indexOf(bookID)

    duplicatecheck !== true ? cartList.push(bookID) : cartList.splice(bookIndex, 1) 

    duplicatecheck !== true ? e.currentTarget.classList.add('inCart') : e.currentTarget.classList.remove('inCart')

    refreshCart(e)

    console.log (cartList)


}

function hideCard (e) {

    const btnGroup = e.currentTarget.parentElement

    console.log(btnGroup)

    const div = btnGroup.parentElement

    console.log(div)

    const cardBody = div.parentElement

    console.log(cardBody)

    const card = cardBody.parentElement

    console.log(card)

    card.classList.add('displayNone')

    }


async function getPictures(url = '', data = {}) {
    // FETCH IMAGE DATA
  const response = await fetch("https://striveschool-api.herokuapp.com/books", {
    "method": "GET",
  })
  .then(data => data.json())
  .then(jsondata => {
    // LOG JSON DATA
    console.log('Output Data', jsondata)



    inputObj = jsondata

  console.log(inputObj)

  favArray = JSON.parse(JSON.stringify(inputObj))

  console.log('Favourite Array', favArray)

  pushToCard (inputObj) 
    //this is your data
    //you can do everything here :)
  })
  // .then(()=> {
  //   favArray = [...inputObj]
  //   console.log(`Favourites ${favArray}`)
  // })

  .catch(err => {
    console.error(err);
  });

}

getPictures()

// function addToFavs (e) {
//   console.log(e.target)
// }


function editToHeartFav () {

let groupButton = document.querySelectorAll('div.btn-group')


for (y=0; y<groupButton.length; y++) {
let secondButton = groupButton[y].children[1]

secondButton.innerHTML = `<i class="far fa-heart"></i>`

// secondButton.addEventListener('click', addToFavs())

}

}

// editToHeartFav()

function editToHide () {

    let groupButton = document.querySelectorAll('div.btn-group')
    
    
    for (y=0; y<groupButton.length; y++) {
    let secondButton = groupButton[y].children[1]
    
    secondButton.innerHTML = `Hide`
    
    // secondButton.addEventListener('click', addToFavs())
    
    }
    
    }

editToHide()

function addToCartButton() {

let groupButton = document.querySelectorAll('div.btn-group')

for (y=0; y<groupButton.length; y++) {
let secondButton = groupButton[y].children[0]

secondButton.innerHTML = `Add to Cart  <i class="fa fa-cart-plus"></i>`

}

}

addToCartButton()



function openNav() {
document.getElementById("sideNav").style.width = "300px";
document.getElementById("page-top").style.marginRight = "300px";

let inline = document.querySelectorAll(".inline") 

inline.forEach(element => {

element.style.width = "300px"

});
}

function closeNav() {
document.getElementById("sideNav").style.width = "0";
document.getElementById("page-top").style.marginRight = "0";
let inline = document.querySelectorAll(".inline") 

inline.forEach(element => {

element.style.width = "0"

});

}