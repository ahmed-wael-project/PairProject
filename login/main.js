let login = document.querySelector(".login .container form #log")
var inputemail = document.querySelector(".login .container form .e #email")
var inputpass = document.querySelector(".login .container form .pass #password")

login.addEventListener("click", e => {
    e.preventDefault()
    if (inputemail.value.length == 0) {
        alert('Please fill in email')

    } else if (inputpass.value.length == 0) {
        alert('Please fill in password')
    }
    else {
        check(inputemail.value, inputpass.value)
        checkAdmin(inputemail.value, inputpass.value)
    }
})




function check(inpEmail, inpPass) {
    var data = window.sessionStorage.getItem("data")

    if (data) {
        var test = JSON.parse(data)
        test.forEach(data => {
            let values = Object.values(data)
            if (inpEmail == values[2] & inpPass == values[3]) {
                window.location = "../start/index.html"
            } else {
                alert("Password Or Email InValid")
            }
        });
    }
    // neww

}

function checkAdmin(inpEmail, inpPass) {
    var dataadmin = window.sessionStorage.getItem("dataadmin")
    if (dataadmin) {
        let admin = JSON.parse(dataadmin)
        let values = Object.values(admin)
        if (inpEmail == values[0] & inpPass == values[1]) {
            window.location = "../adminPage/index.html"
        }
    }
}
