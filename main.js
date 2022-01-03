const colors = ["rgba(33, 132, 200)", "rgba(153, 122, 200)", "rgba(23, 122, 200)", "rgba(133, 122, 200)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const naslov = document.getElementById("naslov");


btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
    naslov.style.backgroundColor = colors[randomNumber];

})

function getRandomNumber(){
    return Math.floor(Math.random()* colors.length);
}
