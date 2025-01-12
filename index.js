let colorCode = document.getElementById("color-code");
let optionContainer = document.getElementById("option-container");
let scoreCount = document.getElementById("score");
let resetButton = document.getElementById("reset-btn");

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
    if (score >= 5) {
        document.body.innerHTML = "<h1>YOU WON. ...! <br>You are really lucky today</h1>";
        document.body.style.color = "blue"

    }
    if (score < -2) {
        document.body.innerHTML = "<h1>HAA HAA .. You lost old man !</h1>";
        document.body.style.color = "red"
    }
        // Only restart the game if the score is within the playable range.
        if (score >= -2 && score < 5) {
            startGame();
        }
}

//Start game function on reloading window:
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
        div.style.cursor = "pointer";
        div.style.transform = "scale(1)"; // Set initial scale
        div.style.transition = "transform 0.4s"; 

        // Add hover effect for scaling
        div.addEventListener("mouseenter", () => {
        div.style.transform = "scale(1.2)"; // Scale up on hover
        });
        div.addEventListener("mouseleave", () => {
        div.style.transform = "scale(1)"; // Scale back to normal on mouse leave 
        });
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


//Resetting the game:
resetButton.addEventListener("click", () => {
    window.localStorage.setItem("score", 0);
    startGame();

})

