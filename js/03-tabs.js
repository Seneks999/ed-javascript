// Знайшли всі заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
// console.log(tabHeaders);
// Знайшли всі контент бокси
const contentBoxes = document.querySelectorAll('[data-tab-content]');
console.log(contentBoxes);

tabHeaders.forEach(function (item) {
  item.addEventListener('click', function () {
    console.log(this.dataset.tab);

    // З .toggle з'являєетя текст, але ті що були відкриті не зникають
    // contentBox.classList.toggle('hidden');

    // 1. Cховати всі contentBox
    contentBoxes.forEach(function (item) {
      item.classList.add('hidden');
    });

    // Вибрати потрібний contentBox та показати його
    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');
  });
});
