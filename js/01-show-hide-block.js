// console.log('Hello world!');

// Команда для пошуку елементів на сторінці
// const button = document.querySelector('#button');
// console.log(button);

// Відслідкувати клік за кнопкою (Track a click by button)
// В метод addEventListener передаємо два аргументи (назва, дія)
// button.addEventListener('click', function () {
//   console.log('Click!!!');
//   content.classList.toggle('content-hidden');
// });

// Коли click, console.log('Click!!!');

// Задача. Знайти в html div з class="card" та прибрать в цьому класі content-hidden
// const button = document.querySelector('#button');
// const content = document.querySelector('#content');
// console.log(content);
// content.classList.remove('content-hidden');
// content.classList.add('content-hidden');
// content.classList.toggle('content-hidden');
// content.classList.toggle('content-hidden');

// button.addEventListener('click', function () {
//   console.log('Click!!!');
//   content.classList.toggle('content-hidden');
// });

// Змінює текст кнопки

// button.textContent = 'Відкрити блок';
// console.log('Click!!!');

// button.addEventListener('click', function () {
//   content.classList.toggle('content-hidden');
//   if (button.textContent == 'Закрити блок')
//     button.textContent = 'Відкрити блок';
//   else button.textContent = 'Закрити блок';
// });

const button = document.querySelector('#button');
const content = document.querySelector('#content');

// 1-й варіант
// button.addEventListener('click', function () {
//   console.log('Click!!!');
//   content.classList.toggle('content-hidden');

//   if (content.classList.contains('content-hidden')) {
//     button.textContent = 'Відкрити блок';
//   } else {
//     button.textContent = 'Закрити блок';
//   }
// });

// 2-й варіант. Скорочений код
button.addEventListener('click', function () {
  if (content.classList.toggle('content-hidden')) {
    button.textContent = 'Відкрити блок';
  } else {
    button.textContent = 'Закрити блок';
  }
});

// Сховати весь вміст сторінки
document.body.innerHTML = 'hello';

//
// Ось як працює твій код для сховування/відкривання блоку на сторінці:

// HTML
// Кнопка:

// html
// Копіювати код
// <button class="btn btn-outline-primary mb-3" id="button" type="button">
//   Відкрити блок
// </button>
// Це кнопка, яка відображається на сторінці. Її початковий текст — "Відкрити блок".
// Кнопці присвоєно унікальний ідентифікатор id="button", за допомогою якого ми будемо звертатися до неї в JavaScript.
// Блок з контентом:

// html
// Копіювати код
// <div class="card card-body content-hidden" id="content">
//   Блок с контентом...
// </div>
// Це блок із класом card, що містить контент.
// Клас content-hidden приховує блок (припускаю, що у CSS цей клас містить властивість display: none або подібну для приховування елемента).
// Блок також має унікальний ідентифікатор id="content", щоб до нього можна було звертатися через JavaScript.
// JavaScript
// javascript
// Копіювати код
// button.addEventListener('click', function () {
//   if (content.classList.toggle('content-hidden')) {
//     button.textContent = 'Відкрити блок';
//   } else {
//     button.textContent = 'Закрити блок';
//   }
// });
// Пошук елементів на сторінці:

// Знаходимо кнопку з ідентифікатором button та блок із контентом через JavaScript, скоріш за все за допомогою таких рядків:
// javascript
// Копіювати код
// const button = document.querySelector('#button');
// const content = document.querySelector('#content');
// Обробник події click:

// Використовується метод addEventListener для відстеження кліків на кнопці:
// javascript
// Копіювати код
// button.addEventListener('click', function () { ... });
// Метод toggle:

// Кожен раз, коли кнопка натискається, викликається метод toggle на класі content-hidden:
// javascript
// Копіювати код
// content.classList.toggle('content-hidden');
// Метод toggle додає клас content-hidden, якщо його немає, або видаляє, якщо він є. Це призводить до приховування або відображення блоку залежно від наявності класу.
// Зміна тексту кнопки:

// Якщо клас content-hidden додається (тобто блок приховується), змінюється текст кнопки на "Відкрити блок":
// javascript
// Копіювати код
// button.textContent = 'Відкрити блок';
// Якщо клас content-hidden видаляється (тобто блок стає видимим), текст змінюється на "Закрити блок":
// javascript
// Копіювати код
// button.textContent = 'Закрити блок';
// Як це виглядає в дії:
// При завантаженні сторінки блок з контентом спочатку прихований, оскільки він має клас content-hidden.
// Користувач натискає на кнопку — клас content-hidden видаляється з блоку, і він стає видимим. Текст кнопки змінюється на "Закрити блок".
// При повторному натисканні на кнопку клас content-hidden знову додається до блоку, він стає прихованим, і текст кнопки змінюється назад на "Відкрити блок".
// Таким чином, кожен клік на кнопку перемикає видимість блоку і змінює текст кнопки відповідно до стану блоку.

// alert('Good morning');

// alert('Edward');

// console.log(10 + 5);
// console.log(10 + 5);
// console.log(2 + 2 - 5);
