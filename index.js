let colorCodeContainer = document.getElementById("color-code");
let optionContainer = document.getElementById("option-container");

let randomColor = null;
let score = 0;


let generateRandomeNumberRGB = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
}


let generateRandomRGB = () => {
    let red = generateRandomeNumberRGB(0,255);
    let green = generateRandomeNumberRGB(0,255);
    let blue = generateRandomeNumberRGB(0, 255);
    return `rgb(${red} , ${green},${blue})`;

}

let incrementScore = () => {
    score += 1;
}

//Value of generateRandomNumberRGB:
console.log(generateRandomeNumberRGB(0, 255));

//Console display of rbg val:
console.log(generateRandomRGB());

let validateResult = (e) => {
    console.log(e.target);
    let selectedColor = e.target.style.backgroundColor;
    console.log(selectedColor===randomColor);
}
//Start game function:
let startGame = () => {
    randomColor = generateRandomRGB();
    colorCodeContainer.innerText = randomColor;
    let presentIndex = generateRandomeNumberRGB();
    for (let i=0; i < 6; i++) {
        let div = document.createElement("div");
        div.addEventListener("click" , validateResult())
        div.style.height = "60px";
        div.style.width = "60px";
        div.style.margin = "5px";
        div.style.borderRadius = "10px";
        div.style.backgroundColor =
            i === presentIndex ? randomColor : generateRandomRGB();
        optionContainer.append(div);
    }
}

//Reloading window to generate new color everytime !
window.addEventListener("load", startGame());