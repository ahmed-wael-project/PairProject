$(".log").on("click",function (){


    var inputemail = document.getElementById('email');
    var inputpass = document.getElementById('password');
    if(inputemail.value.length == 0){
        alert('Please fill in email')

    }else if(inputpass.value.length == 0){
        alert('Please fill in password')
    }
    else{
        window.localStorage('email', inputemail.value);
        window.localStorage('password', inputpass.value)
        alert('Your account has been created')
}
    })
        //function check(){
        // var storedemail = localStorage.getItem('email');
        // var storedPass = localStorage.getItem('password');
        // var useremail = document.getElementById('email');
        // var userPass = document.getElementById('password');    
        // if(useremail.value == storedemail && userPass.value == storedPass){
        //     alert('You are logged in.');
        // }else{
        //     alert('Error on login');
        // }
        //})
    
function check(){
    var data = window.sessionStorage.getItem("data")
if(data){
    var test = JSON.parse(data)
    console.log(test)
}
}
check()