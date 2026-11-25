//Declaração de todas as variaveis dentro da calculadora

let numberZero = document.getElementById('BtnZero');
let numberOne = document.getElementById('BtnOne');
let numberTwo = document.getElementById('BtnTwo');
let numberThree = document.getElementById('BtnThree');
let numberFour = document.getElementById('BtnFour');
let numberFive = document.getElementById('BtnFive');
let numberSix = document.getElementById('BtnSix');
let numberSeven = document.getElementById('BtnSeven');
let numberEight = document.getElementById('BtnEight');
let numberNine = document.getElementById('BtnNine');
let equal = document.getElementById('BtnEqual');
let more = document.getElementById('BtnMore');
let minus = document.getElementById('BtnMinus');
let mult = document.getElementById('BtnMult');
let div = document.getElementById('BtnDiv');
let clear = document.getElementById('BtnClear');
var alert = document.querySelector('#Alert');
var killBtn = document.querySelector('#BtnKill');
var boolFlag = false;
var firstNumber = '';
var secondNumber = '';
var destaques = document.querySelector('.Destaque');
var fc = document.querySelector('#Container');
var container = document.getElementById('ResultContainer');
var secondContainer = document.getElementById('SecondResultContainer');
var op = '';


//Adicionando eventos nos botões da calculadora juntamente com as funções



numberZero.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '0'
  numberDigitOne = 0;
});

numberOne.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '1'
  numberDigitOne = 1;
});

numberTwo.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '2'
  numberDigitOne = 2;
});

numberThree.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '3'
  numberDigitOne = 3;
});

numberFour.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '4'
  numberDigitOne = 4;
});

numberFive.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '5'
  numberDigitOne = 5;
});

numberSix.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '6'
  numberDigitOne = 6;
});

numberSeven.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '7'
  numberDigitOne = 7;
});

numberEight.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '8'
  numberDigitOne = 8;
});

numberNine.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML += '9'
  numberDigitOne = 9;
});

clear.addEventListener('click', () =>{
  container.style.color = 'black';
  container.innerHTML = ''
  visorClearFunc();
});

more.addEventListener('click', () => {
  op = "+"
  inputNumbers();
  secondContainer.innerText = firstNumber ;
});

minus.addEventListener('click', () => {
  op = "-"
  inputNumbers();
  secondContainer.innerText = firstNumber;
})

mult.addEventListener('click', () => {
  op = "*"
  inputNumbers();
  secondContainer.innerText = firstNumber;
})

div.addEventListener('click', () => {
  op = "/"
  inputNumbers();
  secondContainer.innerText = firstNumber;
})

equal.addEventListener('click', () => {
  inputNumbers();
  finalResult = opVerify();
  secondContainer.innerText = finalResult;
  firstNumber = '';
  secondNumber = '';
  boolFlag = false;
  op = '';
});

function inputNumbers(){
  if(container.innerText != ''){
    if(!boolFlag){
      firstNumber += container.innerText;
      boolFlag = true;
      container.innerText = '';
    } else {
        secondNumber += container.innerText;
        boolFlag = false;
        container.innerText = '';
    }
  }
};

function visorClearFunc(){
    firstNumber = '';
    secondNumber = '';
    container.innerText = '';
    secondContainer.innerText = '';
    boolFlag = false;
    op = '';
};

function opVerify(){
  if(op === "+"){
    return Number(firstNumber) + Number(secondNumber);
  } else if (op === "-"){
    return Number(firstNumber) - Number(secondNumber);
  } else if (op === "*"){
    return Number(firstNumber) * Number(secondNumber);
  } else if (op === "/"){
    if(secondNumber == 0){
      visorClearFunc();
      fc.style.pointerEvents = 'none';
      return secondContainer.innerText = "0 não se divide!"
    }
    return Number(firstNumber) / Number(secondNumber);
  }
}
