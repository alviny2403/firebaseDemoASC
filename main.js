import { ref, push, set, database, onValue } from "./firebase.js";

//get elements from index.html
let userInput= document.getElementById("itemInput")
let submitBtn= document.getElementById("submitBtn")
let itemsContainer= document.getElementById("itemsContainer")

//refrence a part of our database
let itemsRef= ref(database, "items")

//add item to database
submitBtn.onclick= (event)=>{
    event.preventDefault()
    let userInputValue= userInput.value
    userInput.value= ""

    let newItemsRef= push(itemsRef)
    set(newItemsRef, userInputValue)
}

//show items on firebase in our items container
onValue(itemsRef, (snapshot)=>{
    itemsContainer.innerHTML= ""
    let data= snapshot.val()
    console.log(data)
    for (let key in data){
        console.log(data[key])

        let newLi= document.createElement("li")
        newLi.innerHTML= data[key]

        itemsContainer.append(newLi)
    }
})