let box = Array.from(document.querySelectorAll(".signup .container .gender .box"))

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


signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let gender_type;
    box.forEach(gender => gender.classList.contains("active") ? gender_type = gender : "")
    if (inputEmail.value == 0 || inputPassword.value == 0 || gender_type == undefined) {
        alert.innerHTML = "Please Add Email Or Password Or Gender"
        alert.classList.add("active")
    } else if (inputPassword.value.length < 8) {
        alert.innerHTML = "Password At Least 8 Character"
    } else {
        alert.classList.add("active")
        addData(inputEmail.value, inputPassword.value, gender_type.getAttribute("data-gender"))
        alert.innerHTML = "Passed"
        alert.style.backgroundColor = "#4cd89d"
        window.location.href = "../login/index.html"
    }

})


var arrOfData = []

function addData(email, password, gender) {
    const data = {
        id: Date.now(),
        gender: gender,
        Email: email,
        Password: password
    }
    arrOfData.push(data)
    save(arrOfData)
}

function save(data) {
    window.sessionStorage.setItem("data", JSON.stringify(data))
}
let admindata = {
    admin: "admin",
    password: "admin"
  }
  
  window.sessionStorage.setItem("dataadmin",JSON.stringify(admindata))