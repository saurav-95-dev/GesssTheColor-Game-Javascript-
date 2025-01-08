let colorCodeContainer = document.getElementById("color-code");
let randomColor = null;


let generateRandomeNumberRGB = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
}


let generateRandomRGB = () => {
    let red = generateRandomeNumberRGB(0,255);
    let green = generateRandomeNumberRGB(0,255);
    let blue = generateRandomeNumberRGB(0, 255);
    return `rgb(${red} , ${green},${blue})`;

}

//Value of generateRandomNumberRGB:
console.log(generateRandomeNumberRGB(0, 255));

//Console display of rbg val:
console.log(generateRandomRGB());

//Start game function:
let startGame = () => {
    randomColor = generateRandomRGB();
    colorCodeContainer.innerText = randomColor;
}

window.addEventListener("load", startGame());