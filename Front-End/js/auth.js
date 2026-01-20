document.addEventListener("DOMContentLoaded", function() {
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const formLogin = document.getElementById('login-form');
    const formRegister = document.getElementById('register-form');

formLogin.addEventListener('submit', function(e) {
    e.preventDefault(); // Chặn reload trang
    // Chuyển hướng giả lập sang trang Profile
    window.location.href = '../UserPage/profile.html';
});

    // Hàm switch sang Login
    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');

        formLogin.classList.add('active-form');
        formRegister.classList.remove('active-form');
    });

    // Hàm switch sang Register
    tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');

        formRegister.classList.add('active-form');
        formLogin.classList.remove('active-form');
    });
});