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
    } else if (number <=12) {
        console.log("Привет, друг");
    } else if (number >= 13) {
        console.log("Добро пожаловать!");
    }
} 

function checkNum() {
    const number = prompt("Введите число");
    if (number > 0) {
        return number**3
    } else {
        console.log("Переданный параметр не является числом");
    }
}


function multiplyNumbers(a, b) {
     if (isNaN(a) || isNaN(b)) {
         console.log('Одно или оба значения не являются числом');
     } else {
         console.log(a * b);
     }
 }


 const circle1 = {
    radius: 8,
    getArea() {
       return 2 * Math.PI * this.radius; 
    }
    getPerimeter () {
        return 2 * Math.PI * this.radius;
    }
  }

  const circle2 = {
    radius: 6,
    getArea() {
       return 2 * Math.PI * this.radius; 
    }
    getPerimeter () {
        return 2 * Math.PI * this.radius;
    }
  }

function GamesSeasons() {
    let month = Number(prompt("Введите месяц"));
    if (month===1 || month===2 || month===12) {
        console.log("Зима");
    } else if(month >= 3 && month < 6) {
        console.log("Весна");
    } else if(month >=7 && month < 9) {
        console.log("лето");
    } else if (month >=9 && month < 12) {
        console.log("Зима");
    } else {
        alert("такого месяца не существует");
    }
}