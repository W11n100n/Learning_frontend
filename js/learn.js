// Примитивные типы данных

const x = 1; // Тип данных - Числа
const y = 0.5; // Тип данных - Числа

// Числа BigInt
const z = 9007199254740998n; // Для чисел BigInt (больших чисел) в конце ставится <n>
// Для смешанных операций с цифрами и большими лучше использовать конвертации

console.log(x + z); // Вызовет ошибку typeError
console.log(x + BigInt(z)); // Проблема BigInt это 1. невозможность работы с нецелыми числами

// Строки
const name = "Рома";
const naming = 'Рома'; // Кавычки любые, главное чтобы одинаковые

// Булевые значения
const isSummer = false; // Булевые значения обычно начинаются со слова is
const isSeptember = true;

// Тип данных символ Symbol
const id = Symbol(); // Ключ id, создающийся при вызове функции Symbol(), двух одинаковых символов быть не может и медленнее работает
console.log(id);


// Сложный тип

// Массивы
const array = [ 1, 2, 3, 4, 555]; // Элементами могут быть все типы простых данных

// Объект
// Информация хранится по типу ключ:значение
const myInfo = {
    name: "Roma",
    age: 25,
    friends: ["Max", "Vlad"],
    isMarried: false,
}


// Переменные, обозначаются через let
let xax;
let message;
message = "Hello"; // Знаечние переменной
alert(message); // Показывает значение переменной
let hi = "Hello"; // Можно и так
let mes="Hello", age = 25, con = 1; // Однострочное обозначение

//В старых скриптах используется var
var lets = 1;
num = 5; // Можно создать еще и так, но не рекомендуется

// Чтобы объявить константу, пишется const
const date = "01.01.2023";
const COLOR_RED = "#F00";


// Циклы
// for
for (let i = 0; i < 4; i++) {
    console.log(1);
}

// for ... of
const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// То же самое, что и выше, но короче
for (let letter of arr){
    console.log('letter:', letter);
}

// for in
const user = {
    name: 'Roma',
    age: '21',
    isMarried: false,
};

//for in проходится по ключам объекта
for (let key in user){
    console.log(key, user[key]);
}

// === тоже что и == в c++

const as = 1
// while
while (as < 5) {
    as++;
    console.log(as);
    // break; // Прерывание
}

// Do While
const ass = 0;
do {
    ass++;
    console.log(ass);
} while (ass < 3)

prompt(xax); // Введите x

// if
// if (as = 1) {
//    console.log(1);
// }
