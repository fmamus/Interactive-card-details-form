const userName = document.getElementById('name');
const cardNumber = document.getElementById('card-number');
const cardDateMonth = document.getElementById('card-date-month');
const cardDateYear = document.getElementById('card-date-year');
const cardCvc = document.getElementById('card-cvc');
const button = document.getElementById('button');

const regName = /^[a-zA-Z]+( [a-zA-Z]+)+$/;

cardNumber.addEventListener('keyup', () => {
    if (cardNumber.value.length > 16) {
        cardNumber.value = cardNumber.value.slice(0, 19);
    }
})

cardDateMonth.addEventListener('keyup', () => {
    if (cardDateMonth.value.length > 2) {
        cardDateMonth.value = cardDateMonth.value.slice(0, 2);
    }
})


cardDateYear.addEventListener('keyup', () => {
    if (cardDateYear.value.length > 2) {
        cardDateYear.value = cardDateYear.value.slice(0, 2);
    }
})


cardCvc.addEventListener('keyup', () => {
    if (cardCvc.value.length > 3) {
        cardCvc.value = cardCvc.value.slice(0, 3);
    }
})

//--------- VALIDATION FOR BLANK ------------

//Name

button.addEventListener('click', () =>{
    if(regName.test(userName.value) === false){
        userName.style.borderColor = "hsl(0, 100%, 66%)";
        document.getElementById("nameValidMessage").style.display = "block";
    }else{
        userName.style.borderColor = "hsl(270, 3%, 87%)";
        document.getElementById("nameValidMessage").style.display = "none";
    }
    console.log(regName.test(userName.value));
})


userName.addEventListener('keydown', () =>{
    if(!regName.test(userName.value)){
        document.getElementById("nameValidMessage").style.display = "block";
        userName.style.borderColor = "hsl(0, 100%, 66%)";
    }else{
        document.getElementById("nameValidMessage").style.display = "none";
        userName.style.borderColor = "hsl(270, 3%, 87%)";
    }
})

//Card Number

button.addEventListener('click', () => {
    if (cardNumber.value.length == 0) {
        document.getElementById("cardValidMessage").style.display = "block";
        cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        document.getElementById("cardValidMessage").style.display = "none";
        cardNumber.style.borderColor = "hsl(270, 3%, 87%)";
    }
})

cardNumber.addEventListener('keyup', () => {
    if (cardNumber.value.length != 19) {
        cardNumber.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        cardNumber.style.borderColor = "hsl(270, 3%, 87%)";
    }
})

cardNumber.addEventListener('keydown', () =>{
    if(cardNumber.value.length != 0){
        return;
    }
    document.getElementById("cardValidMessage").style.display = "none";
    cardNumber.style.borderColor = "hsl(270, 3%, 87%)";
})

cardNumber.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  });

//Card Date

button.addEventListener('click', () => {
    if (cardDateMonth.value.length == 0 || cardDateYear.value.length == 0) {
        document.getElementById("dateValidMessage").style.display = "block";
    } else {
        document.getElementById("dateValidMessage").style.display = "none";
    }
})

cardDateMonth.addEventListener('keydown', () =>{
    if(cardDateMonth.value.length != 0){
        return;
    }
    document.getElementById("dateValidMessage").style.display = "none";
    cardDateMonth.style.borderColor = "hsl(270, 3%, 87%)";
    cardDateYear.style.borderColor = "hsl(270, 3%, 87%)";
})

//Card Date Month Border Color

button.addEventListener('click', () => {
    if (cardDateMonth.value.length == 0 ) {
        cardDateMonth.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        cardDateMonth.style.borderColor = "hsl(270, 3%, 87%)";
    }
})

cardDateMonth.addEventListener('keyup', () => {
    if (cardDateMonth.value < 1 || cardDateMonth.value > 12) {
        cardDateMonth.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        cardDateMonth.style.borderColor = "hsl(270, 3%, 87%)";
    }
})

//Card Date Year Border Color

button.addEventListener('click', () => {
    if (cardDateYear.value.length == 0) {
        cardDateYear.style.borderColor = "hsl(0, 100%, 66%)";
    } 
    else if (cardDateYear.value < new Date().getFullYear().toString().slice(-2)) {
        cardDateYear.style.borderColor = "hsl(0, 100%, 66%)";
    }
    else {
        cardDateYear.style.borderColor = "hsl(270, 3%, 87%)";
    }
})

cardDateYear.addEventListener('keyup', () => {
    if (cardDateYear.value < new Date().getFullYear().toString().slice(-2)) {
        cardDateYear.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        cardDateYear.style.borderColor = "hsl(270, 3%, 87%)";
    }
})

//Card CVC

button.addEventListener('click', () => {
    if (cardCvc.value.length == 0) {
        document.getElementById("cvcValidMessage").style.display = "block";
        cardCvc.style.borderColor = "hsl(0, 100%, 66%)";
    }
    else if(cardCvc.value.length < 3 && cardCvc.value.length > 0){
        cardCvc.style.borderColor = "hsl(0, 100%, 66%)";
    }
    else{
        document.getElementById("cvcValidMessage").style.display = "none";
        cardCvc.style.borderColor = "hsl(270, 3%, 87%)";
    }
})

cardCvc.addEventListener('keydown', () =>{
    if(cardCvc.value.length != 0){
        return;
    }
    document.getElementById("cvcValidMessage").style.display = "none";
    cardCvc.style.borderColor = "hsl(270, 3%, 87%)";
})

cardCvc.addEventListener('keyup', () => {
    if (cardCvc.value.length < 3){
        cardCvc.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
        cardCvc.style.borderColor = "hsl(270, 3%, 87%)";
    }
})