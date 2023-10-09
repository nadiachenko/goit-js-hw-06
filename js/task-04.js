// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення
// лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const counterHolder =  document.querySelector("#value")


incrementButton.addEventListener('click', () => {
    counterValue++;
    counterHolder.textContent = counterValue;
})

decrementButton.addEventListener('click', () => {
    counterValue--;
    counterHolder.textContent = counterValue;

})

