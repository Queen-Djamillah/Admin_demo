document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const user = document.getElementById('username').value.trim();
      const pass = document.getElementById('password').value.trim();
      const role = document.getElementById('role').value;
      const loginError = document.getElementById('loginError');

      const savedUser = localStorage.getItem('regUsername');
      const savedPass = localStorage.getItem('regPassword');
      const savedRole = localStorage.getItem('regRole');

      const isPredefined =
        (user === 'admin' && pass === 'admin123' && role === 'admin') ||
        (user === 'editor' && pass === 'editor123' && role === 'editor') ||
        (user === 'viewer' && pass === 'viewer123' && role === 'viewer');

      const isRegistered =
        user === savedUser && pass === savedPass && role === savedRole;

      if (isPredefined || isRegistered) {
        localStorage.setItem('userRole', role);
        loginError.innerText = '';
        window.location.href = 'dashboard.html';
      } else {
        loginError.innerText = 'Login failed. Please check your credentials and role.';
      }
    });
  }
});
