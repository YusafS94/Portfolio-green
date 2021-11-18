

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // get random number between 0 and 3
    const randomNumber = getRandomNumber(); //plugged in random number function
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function for getting the random number
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
