
const inputField = document.getElementById('inputField');
const btnSubmit = document.getElementById('btnSubmit');
const duplicateField = document.getElementById('duplicateField');

inputField.addEventListener ("keyup", () =>{
    duplicateField.textContent = `${inputField.value}`;  
});

btnSubmit.addEventListener ("click", () =>{
    console.log (inputField.value);  
    duplicateField.textContent = '';
    inputField.value = '';
   });
