const fetchLogin = async () => {
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault()
        
        const email = document.getElementById('Email').value
        const password = document.getElementById('password').value

        fetch ('http://10.11.100.9:3000/api/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            let state = false

            data.forEach(user => {
                if(user.email === email && user.password === password){
                    state = true
                    window.location.href = '/'
                }
            });

            if (!state) {
                alert('Email o contraseña incorrectos')
            }

        })          
        
      })
}

export default fetchLogin