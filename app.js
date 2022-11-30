const cardNumber = document.getElementById('card-number');
const cardDateMonth = document.getElementById('card-date-month');
const cardDateYear = document.getElementById('card-date-year');
const cardCvc = document.getElementById('card-cvc');

cardDateMonth.addEventListener('keydown', () => {
    if (cardDateMonth.value.length > 2) {
        cardDateMonth.value = cardDateMonth.value.slice(0, 2);
    }
})


cardDateYear.addEventListener('keydown', () => {
    if (cardDateYear.value.length >= 2) {
        cardDateYear.value = cardDateYear.value.slice(0, 2);
    }
})


cardCvc.addEventListener('keydown', () => {
    if (cardCvc.value.length > 2) {
        cardCvc.value = cardCvc.value.slice(0, 2);
    }
})