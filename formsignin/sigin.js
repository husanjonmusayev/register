
// user form 


// form card 
let cleced = document.getElementById('new')
let clecedBack = document.getElementById('back')



// siginUp form 

let fristname = document.getElementById('fristname')
let usernameSignup = document.getElementById('usernameSiginUp')
let passwordSiginUp = document.getElementById('passwordSiginUp')
let emailSiginUp = document.getElementById('emailSiginUp')
let sgnUp = document.getElementById('sgnUp')

// eroor tex form siginUp

let nameError = document.getElementById('nameError')
let usernameError = document.getElementById('usernameError')
let passwordErr = document.getElementById('passwordErr')
let emailErr = document.getElementById('emailErr')



// siginIn form
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let btn = document.getElementById('btnSignIn')




function clear() {

    fristname.value = ''
    usernameSignup.value = ''
    passwordSiginUp.value = ''
    emailSiginUp.value = ''

}


function validate() {

    //  fristname validate 

    if (!fristname.value) {
        fristname.focus()
        nameError.textContent = "ismingizni kiriting"
        nameError.style.color = 'red'
        return false
    } else {
        nameError.textContent = ""
        nameError.style.color = 'red'
    }


    // usernameSignUp validate 

    if (!usernameSignup.value) {
        usernameSignup.focus()
        usernameError.textContent = "username ni kiriting"
        usernameError.style.color = 'red'
        return false
    } else {
        usernameError.textContent = ""
        usernameError.style.color = 'none'
    }

    // emailSiginUp validate 

    if (!emailSiginUp.value) {
        emailSiginUp.focus()
        emailErr.textContent = "Emailni kiritish shart"
        emailErr.style.color = 'red'
        return false
    } else {
        emailErr.textContent = ""
        emailErr.style.color = 'none'
    }

    // pasword validate 

    if (!passwordSiginUp.value) {
        passwordSiginUp.focus()
        passwordErr.textContent = "parolni kiriting"
        passwordErr.style.color = 'red'
        return false
    } else {
        passwordErr.textContent = ""
        passwordErr.style.color = 'none'
    }



    return true
}

function backValidate() {
    if (!username.value) {
        alert('usernameni kiriting')
        username.focus()
        return false
    }

    if (!email.value) {
        alert('email kiriting')
        email.focus()
        return false
    }

    if (!password.value) {
        alert('password kiriting')
        password.focus()
        return false
    }


    return true
}

function clearback() {

    username.value = ''
    email.value = ''
    password.value = ''


}
// signup register 
sgnUp && sgnUp.addEventListener('click', function (e) {
    e.preventDefault()
    if (validate()) {
        let user = {
            username: usernameSignup.value,
            email: emailSiginUp.value,
            password: passwordSiginUp.value
        }
        fetch('https://auth-rg69.onrender.com/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)

        })


            .then(res => res.json())
            .then(data => {
                if (data) {
                    cleced.click()

                    // siginin register 


                    btn && btn.addEventListener('click', function (e) {
                        e.preventDefault()
                        if (backValidate()) {
                            let user = {
                                username: username.value,
                                email: email.value,
                                password: password.value,
                            }

                            fetch('https://auth-rg69.onrender.com/api/auth/signin', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json;charset=utf-8'
                                },
                                body: JSON.stringify(user)

                            })
                                .then(respons => respons.json())
                                .then(data => {
                                    window.location.assign('http://127.0.0.1:5500/index.html')
                                })
                                .catch(err => {
                                    clecedBack.click()
                                })



                        }
                        clearback()
                    })

                }

            })
            .catch(err => { console.log(err) })
    }




    clear()
})









