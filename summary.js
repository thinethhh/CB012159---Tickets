document.addEventListener('DOMContentLoaded', () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  if (userData) {
    const nameCell = document.getElementById('name');
    const emailCell = document.getElementById('email');
    const contactNumberCell = document.getElementById('contactNumber');

    nameCell.textContent = userData.name;
    emailCell.textContent = userData.email;
    contactNumberCell.textContent = userData.mobile;
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const bookingSummary = JSON.parse(localStorage.getItem('bookingSummaries'));
  
    if (bookingSummary) {
      const dateCell = document.getElementById('date');
      const durationCell = document.getElementById('duration');
      const finalTotalCell = document.getElementById('finalTotal');

      dateCell.textContent = bookingSummaries.date;
      durationCell.textContent = bookingSummaries.totalHours;
      finalTotalCell.textContent = bookingSummaries.total;
    }
  });

  window.onload = function () {
    const summaryTable = localStorage.getItem('summary');
    document.getElementById('summaryTable').innerHTML = summaryTable;
  }
  