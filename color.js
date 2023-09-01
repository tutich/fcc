const colors = ["blue", "black", "red", "rgb(34,56,23)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(randomNumber);
});

function getRandomNumber() {
    return Math.floor(math.random() * colors.length);

}