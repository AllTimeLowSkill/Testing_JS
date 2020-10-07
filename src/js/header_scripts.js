// ------------------------Time-------------------------//
const date = document.querySelector('.date_now')

dateNow = () => {
    let time_now = new Date()
    date.textContent = `${time_now.getHours()}:${time_now.getMinutes()}:${time_now.getSeconds()}` 
}

setInterval(dateNow, 1000)

//-----------------------Time-------------------------//

//------------------------------------Registration-------------------------//
const registration_btn = document.querySelector('.registration_btn')
registration_btn.onclick = () => {
    const user_name = document.querySelector('#user_name')
    const user_pass = document.querySelector('#user_pass')
    const repeat_pass = document.querySelector('#repeat_pass')

    if(user_pass.value === repeat_pass.value){
        const login = document.querySelector('.login')
        login.textContent = user_name.value
    }else{
        const form_registration = document.querySelector('.form_registration')
        form_registration.innerHTML += `<div>
                                            <p>Пароли не совпадают</p>
                                        </div>`
        
    }
}




