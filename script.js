

let inputObj

let favArray = []

let favNum = 0


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

secondButton[1].addEventListener('click', addToFavs)

// secondButton[1].addEventListener('click', changeHeart)


}
}

function pushToCardAfterChange (input) {

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

let span = eachCard[x].lastChild

let innerSpan = span.innerHTML

innerSpan = cardID

// CREATE SPAN FOR ID

// const spanID = document.createElement('span')

// spanID.classList.add('hide', 'bookID')

// spanID.innerHTML = cardID

// eachCard[x].appendChild(spanID)



console.log(eachCard[x])

const groupButton = document.querySelectorAll('div.btn-group')

// ADD TO FAVOURITE EVENT LISTENER

const secondButton = eachCard[x].querySelectorAll('button')

secondButton[1].addEventListener('click', addToFavs)

// secondButton[1].addEventListener('click', changeHeart)


}
}



function addToFavs (e) {

  console.log(e.target)

  console.log(e.currentTarget)

  const eachcard2 = document.querySelectorAll('div.card')

  console.log(eachcard2)

  const heart = e.currentTarget.firstElementChild

  console.log(heart)

  const btnGroup = e.currentTarget.parentElement

console.log(btnGroup)

const div = btnGroup.parentElement

console.log(div)

const cardBody = div.parentElement

console.log(cardBody)

const card = cardBody.parentElement

console.log(card)

const cardParent = card.parentElement

console.log(cardParent)

const colChildren = cardParent.childNodes

console.log(colChildren)

const smallHidden = cardBody.nextElementSibling

console.log(smallHidden)

const cardID = smallHidden.innerHTML

console.log(cardID)

const ID = cardID.toString()

const cards = document.querySelectorAll('.card-body')

eachcard2.forEach(node => {
  const cardbody = node.children[1]
  const btnGroup = cardBody.children[1]
  const heartbutton = btnGroup.children[1]
  const heart = heartbutton.innerHTML


  // heart.style.color === 'red' ? eachcard2.splice(0,0, node) 

  

})

let changeFavArray = JSON.parse(JSON.stringify(favArray))

let tempFavArray 

console.log(changeFavArray)

  if (heart.style.color !== 'red') {


  changeFavArray.forEach(element => {
  if (element.asin === ID){
    let position1 = changeFavArray.indexOf(element)

    console.log(position1)
    
    changeFavArray.splice(`${position1}`, 1)
    
    changeFavArray.splice(0, 0, element)
    console.log(`Favourite Array ${changeFavArray}`)


    

    
    pushToCardAfterChange (changeFavArray)


    

    tempFavArray = JSON.parse(JSON.stringify(changeFavArray))

    console.log(favArray)

    newFav = favNum + 1
    favNum = newFav

    console.log(favNum)


    for (x=0; x<favNum; x++){

    const secondElem = cards[x].children[1]

    const buttongroup = secondElem.children[0]

    const heart = buttongroup.children[1]

    const innerHeart = heart.firstElementChild

    innerHeart.style.fontWeight = 'bold'

    innerHeart.style.color = 'red'

    }

   




    
  
}

})

  } else {

    if (heart.style.color === 'red'){

      


changeFavArray.forEach(element => {
  if (element.asin === ID){
    let position = changeFavArray.indexOf(element)

    console.log(position)

    

    changeFavArray.splice(changeFavArray.length, 0, element)
    changeFavArray.splice(position, 1)
    
    

    console.log(`Favourite Array ${changeFavArray}`)

  

  // let nonFav = 50 - favNum - 1

  pushToCardAfterChange (changeFavArray)





  tempFavArray = JSON.parse(JSON.stringify(changeFavArray))

newFav2 = favNum - 1

console.log(favNum)

favNum = newFav2

console.log(favNum)

let useFav = favNum + 1


for (y=useFav; y<favArray.length; y++){

  const secondElem2 = cards[y].children[1]

const buttongroup2 = secondElem2.children[0]

const heart2 = buttongroup2.children[1]

const innerHeart2 = heart2.firstElementChild

innerHeart2.style.fontWeight = 'normal'

innerHeart2.style.color = '#6c757d'

}






}})



}

changeFavArray = JSON.parse(JSON.stringify(tempFavArray))
  }
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

editToHeartFav()

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