let plusButton = document.querySelector('#plus');
let maxNumber = 9;
let minNumber = 0;
let select = document.querySelector('select');
let trueAnwser =  0;
let falseAnwser = 0;
let minusButton = document.querySelector('#minus');
let devideButton = document.querySelector('#devide');
let multiplyButton = document.querySelector('#multiply');
let statisticsButton = document.querySelector('#statistics');
let resetButton = document.querySelector('#reset');
resetButton.onclick = function(){
    trueAnwser = 0;
    falseAnwser = 0;
    alert('Статистика сброшена!')
}
statisticsButton.onclick = function(){
    alert('Правильных ответов: ' + trueAnwser + '\n' + 'Неправильных ответов: ' + falseAnwser)
}
devideButton.onclick = function(){
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    let correctAnwser = Math.round(firstNumber / secondNumber);
    let userAnwser = prompt(firstNumber + ':' + secondNumber + '= !ОТВЕТ ОКРУГЛИ!','');
    check(correctAnwser,userAnwser);
}
multiplyButton.onclick = function(){
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    let correctAnwser = firstNumber * secondNumber;
    let userAnwser = prompt(firstNumber + '*' + secondNumber + '=','');
    check(correctAnwser,userAnwser);
}
minusButton.onclick = function(){
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    let correctAnwser = firstNumber - secondNumber;
    let userAnwser = prompt(firstNumber + '-' + secondNumber + '=','');
    check(correctAnwser,userAnwser);
}
plusButton.onclick = function(){
    let firstNumber = getRandomNumber();
    let secondNumber = getRandomNumber();
    let correctAnwser = firstNumber + secondNumber;
    let userAnwser = prompt(firstNumber + '+' + secondNumber + '=','');
    check(correctAnwser, userAnwser);
}
function getRandomNumber(){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1))  + minNumber;
}
select.onchange = function(){
    let selectComplexity = select.value;
    if (selectComplexity == 'easy'){
        maxNumber = 9;
        minNumber = 0;
    }
    if (selectComplexity == 'middle'){
        maxNumber = 99;
        minNumber = 10;
    }
    if (selectComplexity == 'hard'){
        maxNumber = 999;
        minNumber = 100;
    }
}
function check(correctAnwser, userAnwser){
    if (userAnwser == correctAnwser){
        trueAnwser = trueAnwser + 1;
        alert('Moлодец, это правильный ответ!');
    }
    else {
        falseAnwser = falseAnwser + 1;
        alert('Хорошая попытка, попробуй ещё раз! Правильный ответ: ' + correctAnwser);

    }
}