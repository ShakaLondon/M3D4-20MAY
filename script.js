

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

const cardSibling = card.nextSibling

console.log(cardParent)

const colChildren = cardParent.childNodes

console.log(colChildren)

const smallHidden = cardBody.nextElementSibling

console.log(smallHidden)

const cardID = smallHidden.innerHTML

console.log(cardID)

const ID = cardID.toString()

const cards = document.querySelectorAll('.card-body')

let allrows = document.querySelectorAll("row")

const parentNode1 = allrows[0].children[0]

const parentNode2 = allrows[1].children[0]

const ParentNode3 = allrows[2].children[0]

if (heart.style.color === '#6c757d') {

    heart.style.fontWeight = 'bold'

    innerHeart.style.color = 'red'

    newFav = favNum + 1
    favNum = newFav

    // if () ? parentNode1.insertBefore(card, parentNode1.children[0]) :


    if (newFav === 1) {

      parentNode1.insertBefore(card, parentNode1.children[0])

      cardParent.insertBefore(parentNode1.lastChild, cardSibling)
      
    } else if (newFav%3 === 0) {

      parentNode3.insertBefore(card, parentNode3.children[0])

      cardParent.insertBefore(parentNode3.lastChild, cardSibling)
      
    } else if (newFav%3 === 0) {

      parentNode2.insertBefore(card, parentNode2.children[0])

      cardParent.insertBefore(parentNode2.lastChild, cardSibling)

    }

} else if (heart.style.color === 'red') {

  heart.style.fontWeight = 'normal'

  innerHeart.style.color = '#6c757d'

  newFav2 = favNum - 1

  console.log(favNum)

  favNum = newFav2

  console.log(favNum)

  
}

// eachcard2.forEach(node => {
//   const cardbody = node.children[1]
//   const btnGroup = cardBody.children[0]
//   const heartbutton = btnGroup.children[1]

//   console.log(heartbutton)

//   const heart = heartbutton.firstElementChild


  // heart.style.color === 'red' ? eachcard2.splice(0,0, node) 

  // if (heart.style.color === 'red') {
  //   eachcard2.splice(0,0, node) 
  // } else {}

//   if (heart.style.color === 'red') {

//     eachcard2.splice(0,0, node)
    
//   }

  

// })

// let changeFavArray = JSON.parse(JSON.stringify(favArray))

// let tempFavArray 

// console.log(changeFavArray)

//   if (heart.style.color !== 'red') {


//   changeFavArray.forEach(element => {
//   if (element.asin === ID){
//     let position1 = changeFavArray.indexOf(element)

//     console.log(position1)
    
//     changeFavArray.splice(`${position1}`, 1)
    
//     changeFavArray.splice(0, 0, element)
//     console.log(`Favourite Array ${changeFavArray}`)


    

    
//     pushToCardAfterChange (changeFavArray)


    

//     tempFavArray = JSON.parse(JSON.stringify(changeFavArray))

//     console.log(favArray)

//     newFav = favNum + 1
//     favNum = newFav

//     console.log(favNum)


//     for (x=0; x<favNum; x++){

//     const secondElem = cards[x].children[1]

//     const buttongroup = secondElem.children[0]

//     const heart = buttongroup.children[1]

//     const innerHeart = heart.firstElementChild

//     innerHeart.style.fontWeight = 'bold'

//     innerHeart.style.color = 'red'

//     }

   




    
  
// }

// })

//   } else {

//     if (heart.style.color === 'red'){

      


// changeFavArray.forEach(element => {
//   if (element.asin === ID){
//     let position = changeFavArray.indexOf(element)

//     console.log(position)

    

//     changeFavArray.splice(changeFavArray.length, 0, element)
//     changeFavArray.splice(position, 1)
    
    

//     console.log(`Favourite Array ${changeFavArray}`)

  

//   // let nonFav = 50 - favNum - 1

//   pushToCardAfterChange (changeFavArray)





//   tempFavArray = JSON.parse(JSON.stringify(changeFavArray))

// newFav2 = favNum - 1

// console.log(favNum)

// favNum = newFav2

// console.log(favNum)

// let useFav = favNum + 1


// for (y=useFav; y<favArray.length; y++){

//   const secondElem2 = cards[y].children[1]

// const buttongroup2 = secondElem2.children[0]

// const heart2 = buttongroup2.children[1]

// const innerHeart2 = heart2.firstElementChild

// innerHeart2.style.fontWeight = 'normal'

// innerHeart2.style.color = '#6c757d'

// }






// }})



// }

// changeFavArray = JSON.parse(JSON.stringify(tempFavArray))
//   }
}



