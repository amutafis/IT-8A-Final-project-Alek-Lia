const cardEl = document.querySelectorAll('.cards .card');
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeCard);

function initializeCard() {
    if (cardEl.length > 0) {
        showCards(slideIndex);
    }
}

function showCards(index) {
    cardEl.forEach((box, i) => {
        box.style.display = "none";
        if (i >= index && i < index + 3) {
            box.style.display = "block";
        } 
        else if (index + 3 > cardEl.length && i < (index + 3) % cardEl.length) {
            box.style.display = "block";
        }
    });
}

function scrollRight() {
    slideIndex = (slideIndex + 1) % cardEl.length;
    showCards(slideIndex);
}
