const footerForm = document.getElementById('footer-form');
const emailRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

footerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();

  // 1. Валідація на клієнті
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  try {
    // 2. Запит до backend
    const response = await fetch('https://your-energy.b.goit.study/api/subscription', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Subscription successful!');
      footerForm.reset();
    } else {
      alert(data.message || 'Something went wrong');
    }
  } catch (error) {
    alert('Network error, please try again later.');
  }
});