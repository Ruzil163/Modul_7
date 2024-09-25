//задание 7.7.1

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person = {
    name: prompt(`введите имя`),
    age: prompt(`введите возраст`)
};
printInfo.call(person);


//Задание 7.7.2

function calculate(a, b, operator) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Некорректные данные";
    }
}
const values = [2, 3, "+"];
const result = calculate.apply(null, values);
console.log(result);

//Задание 7.7.3

const users = [
    { name: "Иван", age: 30 },
    { name: "Андрей", age: 25 },
    { name: "Наталья", age: 15 },
    { name: "Сергей", age: 10 }
];
const older = users.filter(user => user.age >= 18);
const olderNames = older.map(user => user.name);
console.log(olderNames);

//Задание 7.7.4

const person = {
    firstName: "Ivan",
    lastName: "Ivanov"
};
function setFullName(fullName) {
    this.fullName = fullName;
}
const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");
console.log(person.fullName);

//Задание 7.7.5
function getUniqueSortedNumbers(arr) {
    const uniqueNumbers = Array.from(new Set(arr));
    return uniqueNumbers.sort((a, b) => a - b);
}
const numbers = [5, 1, 4, 3, 5, 2, 4, 6, 6];
const uniqueSortedNumbers = getUniqueSortedNumbers(numbers);
console.log(numbers);
console.log(uniqueSortedNumbers);