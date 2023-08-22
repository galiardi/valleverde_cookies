const updateForm = document.getElementById('update-form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const rut = document.getElementById('rut');
const email = document.getElementById('email');
const password = document.getElementById('password');

updateForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const token = localStorage.getItem('access_token');
  try {
    // la constante id_user es asignada en un script al renderizar la pagina (profile.hbs)
    const response = await fetch(`/api/users/${id_user}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
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

    alert('Usuario actualizado correctamente');
    window.location.href = '/';
  } catch (error) {
    alert(error);
  }
});
