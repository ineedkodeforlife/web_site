document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-btn').addEventListener('click', showLoginForm);
    document.getElementById('register-btn').addEventListener('click', showRegisterForm);

    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');

    // Установить обработчики событий для отправки формы
    loginForm.addEventListener('submit', function(event) {
        // Предотвратить отправку формы по умолчанию
        event.preventDefault();

        // Вызвать функцию валидации для формы входа
        validateLoginForm();
    });

    registerForm.addEventListener('submit', function(event) {
        // Предотвратить отправку формы по умолчанию
        event.preventDefault();

        // Вызвать функцию валидации для формы регистрации
        validateRegisterForm();
    });
});

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function validateLoginForm() {
    var usernameField = document.getElementById('username').value;
    var passwordField = document.getElementById('password').value;

    if (!isValidName(usernameField)) {
        username.className = "invalid"
    }else if(isValidName(usernameField)){
        username.className = "valid"
    }

    if (!isValidPassword(passwordField)) {
        password.className = "invalid"
    }else if(isValidPassword(passwordField)){
        password.className = "valid"
    }

    // You can add more validation rules as needed

    // If everything is valid, you can submit the form
    // login();
}

function validateRegisterForm() {
    var newUsernameField = document.getElementById('new_username').value;
    var newPasswordField = document.getElementById('new_password').value;

   if (!isValidName(newUsernameField)) {
        new_username.className = "invalid"
    }else if(isValidName(newUsernameField)){
        new_username.className = "valid"
    }

    if (!isValidPassword(newPasswordField)) {
        new_password.className = "invalid"
    }else if(isValidPassword(newPasswordField)){
        new_password.className = "valid"
    }
}


function isValidName(name) {
    // Проверка, что имя состоит только из букв и содержит только одну заглавную
    return /^[A-Z][a-z]*$/.test(name);
}

function isValidPassword(password) {
    // Проверка, что пароль содержит от 3 до 12 символов
    return password.length >= 3 && password.length <= 12;
}


