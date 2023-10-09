//Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) 
//і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
 //В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const spanText = document.querySelector('#text');
const inputField = document.querySelector('#font-size-control');


inputField.addEventListener('input', () => {

    spanText.style.fontSize = inputField.value +"px";
    
})