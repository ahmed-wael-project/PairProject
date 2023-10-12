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
    console.log(data)
    if (data) {
        var test = JSON.parse(data)
        test.forEach(data => {
            let values = Object.values(data)
            if (inpEmail == values[2] & inpPass == values[3]) {
                window.location="../start/index.html"
            } else {
                alert("Password Or Email InValid")
            }
        });
    }
}

