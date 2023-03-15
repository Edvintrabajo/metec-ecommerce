const fetchRegister = async () => {
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault()
        const fullname = document.getElementById('Fullname').value
        const email = document.getElementById('Email').value
        const password = document.getElementById('password').value
        const confirmPassword = document.getElementById('confirmPassword').value
        if (password === confirmPassword) {
          fetch ('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              fullname,
              email,
              password,
            })
          })
          .then(res => res.json())
          .then(data => {
            window.location.href = 'http://localhost:5173/login'   
          })    
          .catch(err => alert(err))   
        } else {
          alert('Las contraseñas no coinciden')
        }
      })
}

export default fetchRegister