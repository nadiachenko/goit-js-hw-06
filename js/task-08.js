const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);


function onSubmit(evt) {
    evt.preventDefault();

    if (formEl.elements.email.value === "" || formEl.elements.password.value === "") {
        alert("Всі поля повинні бути заповнені")

    } else {

        console.dir(evt.currentTarget);
        const formData = {
            email: formEl.elements.email.value,
            password: formEl.elements.password.value
        }
        console.log(formData);
        formEl.reset();
    }
}
