const loginBtn = document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email')
    const email = userEmail.value

    const userPassword = document.getElementById('user-password')
    const password = userPassword.value

    if (email === 'bank@gmail.com' && password === 'bank') {
        window.location.href = 'index2.html'
    } else {
        alert('invalid info')
    }
})