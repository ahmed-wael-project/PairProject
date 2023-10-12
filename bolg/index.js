
var blogactive = document.getElementsByClassName("info-user")[0]
var btn = document.getElementById("icon")

btn.addEventListener("click", (e) => {
    blogactive.classList.toggle("active")



})







document.getElementById("submit").addEventListener("click", function () {

    var fullName = document.getElementById("fullName").value
    var blogContent = document.getElementById("yourblog").value
    if (fullName.length === 0) {
        alert('Please fill full name')
    } else if (blogContent.length === 0) {
        alert('Please fill in blogContent')
    }
    else{
        var motherpost = document.createElement("div")
        var postElement = document.createElement("div")
        motherpost.appendChild(postElement)
        postElement.innerHTML = "<h2>" + fullName + "</h2><p>" + blogContent + "</p>"
        document.querySelector(".blog-post").appendChild(motherpost)

        motherpost.classList.add("mother")
        postElement.classList.add("child")

        blogactive.classList.remove("active")
        document.getElementById("fullName").value=""
         document.getElementById("yourblog").value=""
        
    }
});




