const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener ('click', () => {
    alert ('Служит для вывода информации в консоль');
})
const alertin = document.querySelector('#alert');
alertin.addEventListener ('click', () => {
    alert ('Служит для вывода информации пользователю');
})
const promptin = document.querySelector('#prompt');
promptin.addEventListener ('click', () => {
    prompt ('Служит для ввода информации пользователем');
})