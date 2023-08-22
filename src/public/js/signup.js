const signupForm = document.getElementById('signup-form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const rut = document.getElementById('rut');
const email = document.getElementById('email');
const password = document.getElementById('password');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value.trim(),
        lastname: lastname.value.trim(),
        rut: rut.value.trim(),
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
