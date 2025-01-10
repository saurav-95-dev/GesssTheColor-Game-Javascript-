let colorCode = document.getElementById("color-code");
let optionContainer = document.getElementById("option-container");
let scoreCount = document.getElementById("score");

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

//Value of generateRandomNumberRGB:
console.log(generateRandomeNumberRGB(0, 255));

//Console display of rbg val:
console.log(generateRandomRGB());

//Increment score on correct selection:
let incrementScore = () => {
    score += 1;
    scoreCount.innerText = score;
}

let validateResult = (e) => {
    let selectedColor = e.target.style.backgroundColor.replaceAll(" ", "");
    if (selectedColor === randomColor.replaceAll(" ", "")) {
        incrementScore();
    }
    else {
        score -= 1;
    }
    window.localStorage.setItem("score", score);
    startGame();
}

//Start game function on reloading window ; 
let startGame = () => {
    score = Number(window.localStorage.getItem("score")) ?? 0;
    scoreCount.innerText = score;
    optionContainer.innerHTML = null;
    randomColor = generateRandomRGB();
    colorCode.innerText = randomColor;

    let presentIndex = generateRandomeNumberRGB(0, 6); // Random index to insert the correct color
    console.log("Present index value", presentIndex);

    for (let i = 0; i < 6; i++) {
        let div = document.createElement("div");

        div.addEventListener("click", validateResult);
        div.style.height = "60px";
        div.style.width = "60px";
        div.style.margin = "5px";
        div.style.borderRadius = "10px";
         // Set grid display for `optionContainer`
        optionContainer.style.display = "grid";
        optionContainer.style.gridTemplateColumns = "repeat(3, 0fr)"; // 3 columns
        optionContainer.style.gap = "-10px"; // Spacing between items

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