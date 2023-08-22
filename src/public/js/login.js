const loginForm = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    });
    const { error } = await response.json();

    if (error) {
      alert(error);
      return;
    }

    window.location.href = '/';
  } catch (error) {
    alert(error);
  }
});
