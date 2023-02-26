const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, alert('Username or Password cannot be blank'));
  } else if (usernameValue === 'tamam'){
    setSuccessFor(username);
    if (passwordValue === '') {
      setErrorFor(password, ('Username or Password cannot be blank'));
    } else if (passwordValue === '@') {
      setSuccessFor(password);
      sessionStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'index.html';
    } else {
      setErrorFor(password, alert('Username or Password is incorrect'));
    }
  } else {
    setErrorFor(username, alert('Username or Password is Incorrect'));
  }
}

function setErrorFor(input, message) {
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}