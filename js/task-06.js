//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті,
// зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, 
//то border інпуту стає зеленим, якщо неправильна кількість - червоним.

//Для додавання стилів використовуй CSS-класи valid і invalid,
// які ми вже додали у вихідні файли завдання.


const allowedLength = document.querySelector('input[data-length="6"]');
const inputField = document.querySelector('#validation-input');

inputField.addEventListener('blur', onBlur);


function onBlur(event) {

    
    if (inputField.value.length == allowedLength.dataset.length) {
       inputField.classList.add('valid');
    } 
    else {
         inputField.classList.add("invalid");
    }
        
     }
     
 
    