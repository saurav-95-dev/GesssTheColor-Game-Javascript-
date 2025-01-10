let colorCode = document.getElementById("color-code");
let optionContainer = document.getElementById("option-container");

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


//Start game function on reloading window ; 
let startGame = () => {
    randomColor = generateRandomRGB();
    //Using option-container html class:
    colorCode.innerText = randomColor;
    console.log(colorCode);
    let presentIndex = generateRandomeNumberRGB();
    console.log("Present index value ", presentIndex);
    for (let i=0; i < 6; i++) {
        let div = document.createElement("div");
        div.style.height = "60px";
        div.style.width = "60px";
        div.style.margin = "5px";
        div.style.borderRadius = "10px";
        div.style.backgroundColor = generateRandomRGB();
        // Place `randomColor` in the `presentIndex` slot
        if (i === presentIndex) {
            div.style.backgroundColor = randomColor;
        } else {
            div.style.backgroundColor = generateRandomRGB();
        }
        optionContainer.append(div);
    }
}

//Reloading window to generate new color everytime by calling startGame function !
window.addEventListener("load", startGame());