// Qualify form.
// ------------------------------------------
let form = document.querySelector('.js-qualify-form');

let departmentSelect = document.querySelector('select#department');

let validateForm = function (e) {

  e.preventDefault();
  e.stopPropagation();

  let department = document.querySelector('#department option:checked').value;

  console.log(department);

  if (department !== '75') {
    form.action = 'qualify-fail.html';
  }

  form.submit();

}

if (form && departmentSelect) {

  form.addEventListener('submit', validateForm);

  departmentSelect.addEventListener('change', validateForm);

}
