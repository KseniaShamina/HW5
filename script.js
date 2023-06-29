function min(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 4));

function checkNumber() {
    const number = prompt("Введите число");
    if (number % 2 === 0) {
      console.log("Число четное");
    } else {
      console.log("Число нечетное");
    }
  }
  
  checkNumber();

  function squareReturn(a) { 
    return a**2 
}
let result = squareReturn(4); 
alert(result); 

function userAge() {
    const number = prompt("Введите число");
    if (number < 0 ) {
        console.log("Вы ввели неправильное значение");
    } if else (number <=12) {
        console.log("Привет, друг")
    } if else (number >= 13) {
        console.log("Добро пожаловать!")
    }
} 

function ckeckNum() {
    const number = prompt("Введите число");
    if (number > 0) {
        return number**3
    } else {
        console.log("Переданный параметр не является числом")
    }
}
