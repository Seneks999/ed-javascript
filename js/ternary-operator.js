let plus = 2 + 3; // Обчислюємо суму
console.log(plus); // Виводимо в консоль для перевірки

// Вставляємо значення в елемент з id="plus1"
document.getElementById('plus1').textContent = plus;

// const score = 85;

// const result =
//   score >= 90
//     ? 'Excellent'
//     : score >= 75
//     ? 'Good'
//     : score >= 50
//     ? 'Pass'
//     : 'Fail';

// const score = 85;
// let result;

// if (score >= 90) {
//   result = 'Excellent';
// } else if (score >= 75) {
//   result = 'Good';
// } else if (score >= 50) {
//   result = 'Pass';
// } else {
//   result = 'Fail';
// }

// console.log(result); // "Good", оскільки score >= 75
// document.getElementById('score1').textContent = result;

// ------------------------------------------------------
// prompt для введення значення score
const score = parseInt(prompt('Введіть свій бал: '), '');

// confirm для підтвердження введених даних
const isConfirmed = confirm(`Ви ввели: ${score}. Підтвердити?`);

console.log(isConfirmed);

if (isConfirmed) {
  let result;

  // Умови для визначення результату
  if (score >= 90) {
    result = 'Excellent';
  } else if (score >= 75) {
    result = 'Good';
  } else if (score >= 50) {
    result = 'Pass';
  } else {
    result = 'Fail';
  }

  // alert для виведення результату
  alert(`Ваш результат: ${result}`);

  // Виведення результату в елемент з id="score1"
  document.getElementById('score1').textContent = result;

  // Виведення результату в консоль
  console.log(result); // Виводимо результат, якщо користувач підтвердив введення
} else {
  alert('Введення даних було скасовано.');
  console.log('Користувач скасував введення даних.'); // Виводимо повідомлення в разі скасування
}

// -----------------------------------------------------------
// ----------------------------------------------------------

// prompt для введення значення score
const score = parseInt(prompt('Введіть свій бал: '), 10);

// confirm для підтвердження введених даних
const isConfirmed = confirm(`Ви ввели: ${score}. Підтвердити?`);

if (isConfirmed) {
  // Використовуємо тернарний оператор для визначення результату
  const result =
    score >= 90
      ? 'Excellent'
      : score >= 75
      ? 'Good'
      : score >= 50
      ? 'Pass'
      : 'Fail';

  // alert для виведення результату
  alert(`Ваш результат: ${result}`);

  // Виведення результату в елемент з id="score1"
  document.getElementById('score1').textContent = result;

  // Виведення результату в консоль
  console.log(result); // Виводимо результат, якщо користувач підтвердив введення
} else {
  alert('Введення даних було скасовано.');
  console.log('Користувач скасував введення даних.'); // Виводимо повідомлення в разі скасування
}
