const grade = 85;

if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

// Завдання 3
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "There are no products in the order!";
  } else if (ordered > available) {
    return "Your order is too large, there are not enough items in stock!";
  } else {
    return "The order is accepted, our manager will contact you";
  }
}

// Перевірка функції
console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // "Your order is too large, there are not enough items in stock!"
console.log(checkStorage(70, 0)); // "There are no products in the order!"
console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 250)); // "Your order is too large, there are not enough items in stock!"
console.log(checkStorage(150, 0)); // "There are no products in the order!"
console.log(checkStorage(80, 80)); // "The order is accepted, our manager will contact you"

// function calculateNumber(initialValue) {
//   let x = initialValue;
//   x = x + 100;
//   x = x / 5;

//   return x;
// }

// const result = calculateNumber(10);
// const result2 = calculateNumber(9876543210);
// console.log(result);
// console.log(result2);

function calculateCircleArea(circleRadius) {
  const area = 3.14 * circleRadius ** 2;
  return area;
}

const circleArea1 = calculateCircleArea(5);
console.log(circleArea1);
