

//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
//підставляє його поточне значення в span#name-output.
 //Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

 const inputField = document.querySelector("#name-input");
 const spanContent = document.querySelector("#name-output");

 
 
 inputField.addEventListener('input', (event) => {
    if (inputField.value !== '') {
        spanContent.textContent = event.currentTarget.value;
        console.log(spanContent.textContent)
    } else {
        spanContent.innerHTML = "Anonymous";
    }
        
     }) 
     
 
    
    
