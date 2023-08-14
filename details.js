window.onload = function () {
  const summaryTable = localStorage.getItem('summary');
  document.getElementById('summaryTable').innerHTML = summaryTable;
}

const fullName = document.getElementById('fullName');
const countryCode = document.getElementById('countryCode');
const selectedCountryFlag = document.getElementById('selectedCountryFlag');
const contactNumber = document.getElementById('contactNumber');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirmEmail');
const emailMatchError = document.getElementById('emailMatchError');
const gender = document.getElementById('gender');
const submitButton = document.getElementById('submitButton');

const formFields = [fullName, countryCode, contactNumber, email, confirmEmail, gender];

formFields.forEach(field => {
  field.addEventListener('input', checkFormValidity);
});

contactNumber.addEventListener('input', () => {
  contactNumber.value = contactNumber.value.slice(0, 10);
  checkFormValidity();
});

updateSelectedCountryFlag(); 

function checkFormValidity() {
  const isFormValid = formFields.every(field => field.value.trim() !== '');

  const selectedCountryCode = countryCode.value;
  const contactNumberValue = contactNumber.value.trim();
  const isValidContactNumber = /^\d{10}$/.test(contactNumberValue);

  const isEmailMatching = email.value === confirmEmail.value;

  submitButton.disabled = !(isFormValid && isValidContactNumber && isEmailMatching);

  if (isFormValid && isValidContactNumber && isEmailMatching) {
    submitButton.addEventListener('click', saveToLocalStorageAndRedirect);
  } else {
    submitButton.removeEventListener('click', saveToLocalStorageAndRedirect);
  }

  if (!isEmailMatching) {
    emailMatchError.textContent = "Emails don't match.";
  } else {
    emailMatchError.textContent = "";
  }
}

function saveToLocalStorageAndRedirect() {
  const userData = {
    name: fullName.value.trim(),
    email: email.value.trim(),
    mobile: contactNumber.value.trim()
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  
  redirectToCardPage();
}

function redirectToCardPage() {
  window.location.href = 'card.html'; 
}

checkFormValidity(); 

document.addEventListener('DOMContentLoaded', () => {
  const bookingSummaries = JSON.parse(localStorage.getItem('bookingSummaries')) || []

  let tableContent = `<tr><th>Date</th><th>Total</th><th>Total Hours</th></tr>`;

  bookingSummaries.forEach(summary => {
    tableContent += `
      <tr>
          <td>${summary.date}</td>
          <td>${summary.total}</td>
          <td>${summary.totalHours}</td>
      </tr>
    `;
  });

  const summaryTable = document.getElementById('summaryTable');
  summaryTable.innerHTML = tableContent;
});

document.getElementById('registrationForm').addEventListener('submit', event => {
  event.preventDefault();
});
