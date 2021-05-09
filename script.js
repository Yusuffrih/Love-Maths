document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
                runGame(gameType);
            }
        });
    }
    runGame('addition');
});

function runGame(gameType){
    //Generate a random number between 1 and 25
    //Math.floor rounds down to the whole number
    //Math.random generates the random number between 0-1 and then you multiply by 25 to get between 0-24 and +1 to have between 1-25
    let num1 = Math.floor(Math.random() * 25 ) +1;
    let num2 = Math.floor(Math.random() * 25 ) +1;

    if(gametType === 'addition'){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game tupe ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`
    }
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}