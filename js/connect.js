"use strict";
// Код у суворому режимі
let username = "Mango";
console.log(username);

username = "Poly";
console.log(username);

document.getElementById("usernamePoly").innerText = username;

// Оголошення змінної без значення виводить "undefined"

let userName;
console.log(userName);

document.getElementById("userNameUndefined").innerText = userName;

// Спочатку оголошуємо змінну, а потім до неї звертаємось.
let age = 20;

age = 25;
console.log(age);

document.getElementById("userAge").innerText = age;

// Оператор typeof

const quantity = 17;
console.log(typeof quantity); // виведе "number"

const message = "JavaScript is awesome!";
console.log(typeof message); // виведе "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // виведе "boolean"

let username;
console.log(typeof username); // виведе "undefined"

let status = null;
console.log(typeof status); // виведе "object"
