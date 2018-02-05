// Qualify form.
// ------------------------------------------
let form = document.querySelector('.js-qualify-form');

let departmentSelect = document.querySelector('select#department');

let validateForm = function (e) {

  e.preventDefault();
  e.stopPropagation();

  let department = document.querySelector('#department option:checked').value;

  if (department !== '75') {
    form.action = 'qualify-fail.html';
  }

  form.submit();

}

form.addEventListener('submit', validateForm);
departmentSelect.addEventListener('change', validateForm);
