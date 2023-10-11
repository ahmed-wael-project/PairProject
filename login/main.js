let login = document.getElementById("log")
var inputemail = document.getElementById('email');
var inputpass = document.getElementById('password');
login.addEventListener("click", e => {
    e.preventDefault()

    if (inputemail.value.length == 0) {
        alert('Please fill in email')

    } else if (inputpass.value.length == 0) {
        alert('Please fill in password')
    }
    else {
        check(inputemail.value, inputpass.value)
    }
})




function check(inpEmail, inpPass) {
    var data = window.sessionStorage.getItem("data")
    if (data) {
        var test = JSON.parse(data)
        test.forEach(data => {
            if (inpEmail.value == data.Email & inpPass.value == data.Password) {
                window.location("../")
            } else {
                alert("Password Or Email InValid")
            }
        });
    }
}

