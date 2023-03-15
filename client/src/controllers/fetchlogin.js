const fetchLogin = async () => {
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault()
        
        const email = document.getElementById('Email').value
        const password = document.getElementById('password').value

        fetch ('http://10.11.100.9:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const { state, message } = data
            if (state) {
                window.location.href = 'http://localhost:5173/'
            } else {
                alert(message)
            }

        })
    })
}

export default fetchLogin