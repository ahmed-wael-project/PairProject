let box = document.querySelectorAll(".signup .container .gender .box")

box.forEach(ele => {
    ele.addEventListener("click", e => {
        box.forEach(e => {
            e.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})

let inputEmail = document.getElementById("email")
let inputPassword = document.getElementById("password")
let signupBtn = document.getElementsByClassName("btn-submit")[0]
let alert = document.getElementsByClassName("alert")[0]
console.log(inputEmail)

signupBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputEmail.value == 0 || inputPassword.value == 0) {
        alert.innerHTML = "Please Add Email Or Password"
        alert.classList.add("active")
    } else if (inputPassword.value < 8) {
        alert.innerHTML = "Password At Least 8 Character"
    } else {
        alert.classList.add("active")
        addData(inputEmail.value, inputPassword.value)
        alert.innerHTML = "Passed"
        alert.style.backgroundColor = "#4cd89d"
    }

})

function addData(email, password) {
    const data = {
        id: Date.now(),
        Email: email,
        Password: password
    }
    save(data)
}
function save(data) {
    window.sessionStorage.setItem("data", JSON.stringify(data))
}