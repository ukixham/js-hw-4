// Функция - это часть кода которая может быть вызвана повторно в разных местах вашего кода
// Объявление функции происходит при помощи ключевого слова  function

// Пример создания функции function имя функции (){}

// function solve() {
//     let result = 5 + 6;
//     let sum = 10 + 20 * 30;
//     return result;
// }

// console.log(solve());



// function info(num1 = 5,num2 = 4, num3 = 50) {
//     let solve = num1 + num2 + num3;
//     return solve;
// }
// console.log(info(15,10));


// function primer(min,max) {
//     let sum = 0;
//     for(let i = min; i < max;i++) {
//         sum = sum + i
//     }
//     return sum
// }
// console.log(primer(1,10));
// console.log(primer(10,20));

// Math - это рабриа с математикой
// Math.random() - отдает случайное число от 0 до 1 ( никогда не получите 1)
// Math.floor() - округляет наше число до наименьшего целого
// Math.ceil() - округляет наше число до наибольшего целого
// Math.round() - округляет наше число по математическим правилам





/* 
10 рандомных примеров. 
Создаем функцию которая отдает рандомное число в том диапозоне который задает сам пользователь. (Минимальное и Максимальное число)
Вы должны создать цикл который будет отдавать 10 примеров на сложение с рондомными цифрами
например (10 + 45 = ) пользователь отвечает 55. После того как он ввел ответ и нажал Enter или OK ему выводится собщение (10 + 45 = 55. Ваш ответ 55 Молодец) если пользователь вводит не правельно то ему отдается сообщение (10 + 45 = 55. Ваш ответ 45 Ошибка)

*/


// function rand(min,max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min);
// }

// let minNumber = +prompt('Введите минимальное число'); 
// let maxNumber = +prompt('Введите максимальное число'); 

// for(let i = 0; i < 10;i++) {
//     let number1 = rand(minNumber,maxNumber) 
//     let number2 = rand(minNumber,maxNumber) 
//     let primer = +prompt(number1 + ' + ' + number2 + ' =');
//     let answer = (number1 + number2) == primer ? 'Молодец' : 'Ошибка';
//     alert(number1 + ' + ' + number2 + ' = ' + (number1 + number2) + ' Ваш ответ ' + primer + ', ' + answer);
    
// }

// Первое задание (Возраст)
// let x = prompt('Введите свое имя')
// let y = +prompt('Введите год рождения')
// let z = +prompt('Введите нынешний год') 

//  function dz (x, y, z) {
//     return x + ', Ваш возраст ' + (z - y)
//  }
 
//  console.log(dz(x, y, z));
 
 
// Второе задание (Рандомные примеры)
let que = +prompt('Введите колличестро примеров');

function Example(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function symbolExample() {
    return Math.floor(Math.random() * (5 - 1) + 1);
}

for(let i = 0; i < que; i++) {
    let exampleNum1 = Example(1, 10), exampleNum2 = Example(1, 10), exampleSymbol = symbolExample(), example = 0;
    if(exampleSymbol == 1) {
        example = exampleNum1 + exampleNum2;
        exampleSymbol = '+';
    }else if(exampleSymbol == 2){
        example = exampleNum1 - exampleNum2;
        exampleSymbol = '-';
    }else if(exampleSymbol == 3){
        example = exampleNum1 * exampleNum2;
        exampleSymbol = '*';
    }else if(exampleSymbol == 4){
        example = exampleNum1 / exampleNum2;
        exampleSymbol = '/';
    }
    let answer = +prompt(exampleNum1 + exampleSymbol + exampleNum2);
    
    console.log(example == answer ? 'Ваш ответ верный - ' + answer : 'Ваш ответ не верный -' + answer  + '!' + ' Правильный ответ - ' + example  + '!'); 
}