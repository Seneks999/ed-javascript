'use strict';
// const isReady = false;

// if (isReady === true) {
//   console.log('Everything is ready');
// }

// Можна написать без  === true тому що це булеве значення

// if (isReady) {
//   console.log('Everything is ready');
// }

// const num1 = 42;
// const num2 = '42';
// console.log(num1 === num2);

// Тернальні вирази
// isReady
//   ? console.log('Everything is ready')
//   : console.log('Everything is not ready');

// 1 Змінні

// Метод toString()
//const age = 55;
// console.log(age.toString());

// const firstName = 'Edward';

// 2 Мутировання

// const lastName = prompt('message: Enter last name');
// alert(firstName + ' ' + lastName);

// 4 Оператори

// const isReady = false;

// if (isReady) {
//   console.log('All ok!');
// } else {
//   console.log("It's not ok!");
// }

// isReady ? console.log('All ready!') : console.log("It's not ready!");

// function getFee(isMember) {
//   return 'The fee is ' + (isMember ? '$2.00' : '$10.00');
// }

// console.log(getFee(true));
// Выводит в консоль: "The fee is $2.00"

// console.log(getFee(false));
// Выводит в консоль: "The fee is $10.00"

// for (var i = 6; i > 3; i--) {}
// console.log(i);

// for (let i = 6; i > 3; i--) {}
// console.log(i);

// const myAge = calculateAge(1969);
// console.log(myAge);

// console.log(calculateAge(1969));
// console.log(calculateAge(1979));
// console.log(calculateAge(1966));

// function calculateAge(year) {
//   return 2082 - year;
// }

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);

//   if (age > 108) {
//     console.log('A man named ' + name + ' now aged ' + age);
//   } else {
//     console.log('la-la-la');
//   }
// }

// logInfoAbout('Eduard', 1969);

// Умовні оператори

// const courseStatus = 'fail'; //ready, fail, pending

// if (courseStatus === 'ready') {
//   console.log('The course is ready and you can take');
// } else if (courseStatus === 'pending') {
//   console.log('The course is still under development');
// } else {
//   console.log('Course is not required');
// }

// HW 2 task 1

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let orderMesage, totalPrice;

//   totalPrice = quantity * pricePerDroid;

//   if (totalPrice > customerCredits) {
//     orderMesage = 'Insufficient funds!';
//   } else {
//     orderMesage = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
//   return orderMesage;
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// HW 2 task 2

// function formatMessage(message, maxLength) {
//   let stringOne;
//   if (message.length <= maxLength) {
//     stringOne = message;
//   } else {
//     stringOne = message.slice(0, maxLength) + '...';
//   }
//   return stringOne;
// }

// console.log(formatMessage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
// console.log(formatMessage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"

// HW 2 task 3

// function checkForSpam(message) {
//   let spamer = false;
//   let lowerCaseMessage;

//   lowerCaseMessage = message.toLowerCase();

//   if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale'))
//     // spamer = true;

//   return spamer;
// }

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('Amazing SalE, only tonight!')); // true
// console.log(checkForSpam('Trust me, this is not a spam message')); // true
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// HW 2 task 4

// function getShippingCost(country) {
//   let price = 0;
//   let retText;

//   switch (country) {
//     case 'China':
//       price = 100;
//       break;
//     case 'Chile':
//       price = 250;
//       break;
//     case 'Australia':
//       price = 170;
//       break;
//     case 'Jamaica':
//       price = 120;
//       break;
//     default:
//       retText = 'Sorry, there is no delivery to your country';
//   }
//   if (price > 0) retText = `Shipping to ${country} will cost ${price} credits`;
//   return retText;
// }

// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"

// 7 Булева локіка
