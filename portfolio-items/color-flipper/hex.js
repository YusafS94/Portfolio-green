const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025 orange favourite
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    console.log('working');
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
console.log("finished");