// User Name
let userName = prompt ("Ehi come ti chiami? (Digita qui il tuo Nome)")
console.log(userName)   

// Stampa userName in index.html
document.getElementById('userName').innerHTML = userName
console.log(document)


// User Surname
let userSurname = prompt ("E qual è il tuo Cognome? (Digita qui il tuo Cognome)")
console.log(userSurname)

// Stampa userSurname in index.html
document.getElementById("userSurname").innerHTML = userSurname
console.log(document)


// Favorite color
let favoriteColor = prompt("Il tuo colore preferito? (Digita qui il tuo colore preferito)")
console.log(favoriteColor)

// Stampa favoriteColor in index.html
document.getElementById("fav_color").innerHTML = favoriteColor
console.log(document)


// User Password
const userPassword = document.getElementById("userPassword").innerHTML = userName + userSurname + favoriteColor
console.log(userPassword)

//Costante Numero
const number = 23
console.log(number) 

// Costante userPassword + costante number
const userPasswordNumber = document.getElementById("userPassword").innerHTML = userPassword + number
console.log(userPasswordNumber)
