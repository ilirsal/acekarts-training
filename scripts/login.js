document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginError = document.getElementById('loginError');

  // ✅ Hardcoded user database
  const users = [
    { username: 'admin', password: 'kart2025', role: 'admin' },
    { username: 'staff1', password: 'staff123', role: 'staff' },
    { username: 'john', password: 'john123', role: 'staff' },
    { username: 'alice', password: 'alice456', role: 'staff' }
    // Add more users here
  ];

  // ✅ Login Button Handler
  loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const foundUser = users.find(
      user => user.username === username && user.password === password
    );

    if (foundUser) {
      // Save user info to localStorage
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', foundUser.username);
      localStorage.setItem('role', foundUser.role);

      // Redirect to dashboard or index
      window.location.href = 'index.html';
    } else {
      // Show error message
      loginError.style.display = 'block';
    }
  });

  // ✅ Enable enter key submission
  [usernameInput, passwordInput].forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        loginBtn.click();
      }
    });
  });
});
