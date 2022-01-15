const formRef = document.querySelector('.login-form')

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    // console.log(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === '' || password === '') {
        alert('Заполните все пустые поля')
    }
    const formData = { mail, password }
    console.log(formData)
    formRef.reset();
}

formRef.addEventListener('submit', onFormSubmit);
