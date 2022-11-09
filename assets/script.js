// Variabes
const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice_Id_Num");
const adviceText = document.querySelector(".advice_Text");

// Run the showQuote
window.onload = showQuote;

// Eventlistener
dice.addEventListener("click", function () {
    showQuote();
});

// Define showQuote() from API
function showQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => data.slip)
        .then((data) => {
            adviceNum.textContent = data.id;
            adviceText.textContent = data.advice;
        })
        .catch((error) => {
            alert('Error ${error}');
        });
} 