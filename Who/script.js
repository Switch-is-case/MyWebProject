let formData = {};
const form = document.querySelector('form');
const LS = localStorage;

const resetBtn = document.getElementById('reset');

function resetAllbtn() {
  // Clear localStorage and form data
  LS.removeItem('formData');
  form.reset();
}

form.addEventListener('input', function (event) {
  // Update formData and save it to localStorage
  formData[event.target.name] = event.target.value;
  LS.setItem('formData', JSON.stringify(formData));
});

// Prepopulate form fields from localStorage on page load
if (LS.getItem('formData')) {
  formData = JSON.parse(LS.getItem('formData'));
  for (let key in formData) {
    if (form.elements[key]) {
      form.elements[key].value = formData[key];
    }
  }
}

// Attach event listener to the reset button
resetBtn.addEventListener('click', resetAllbtn);