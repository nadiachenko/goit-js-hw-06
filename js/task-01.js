// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.



const categories = document.querySelector("#categories");
const arr = [...categories.children];
const numberOfCategories = [...categories.children].length;
 console.log("Number of categories:", numberOfCategories)



const cat = document.querySelectorAll(".item");

cat.forEach((element) => {
    const categoryName = element.firstElementChild.innerHTML;
    const numberOfElemens = [...element.lastElementChild.children].length;
    console.log("Category:", categoryName)
    console.log("Elements:", numberOfElemens)
 });