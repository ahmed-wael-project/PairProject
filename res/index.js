let body = document.getElementsByClassName("resault")[0]
let heading = document.getElementsByClassName("heading")[0]
let text = document.querySelector(".resault .container .text ul li")
let result = localStorage.getItem("person")
heading.innerHTML = `Thank You Are <span>${JSON.parse(result)}</span> Person`

switch (JSON.parse(result)) {
    case "ENFJ":
        text.innerHTML = " The Giver: Loyal and sensitive, they are known for being understanding and generous"
        break;
    case "ENFJs":
        text.innerHTML = "are idealist organizers, driven to implement their vision of what is best for humanity"
        break;
    case "ENTP":
        text.innerHTML = "Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems."
        break;
    case "ESFJ":
        text.innerHTML = "The Caregiver: Soft-hearted and outgoing, they tend to believe the best about other people"
        break;
    case "ENFP":
        text.innerHTML = "The Champion: Charismatic and energetic, they enjoy situations where they can put their creativity to work"
        break;
}

let tryAgain = document.createElement("div")
tryAgain.className = "alert"
let all = ` 
<p class="try_text">Thank You For Your Experience</p>
<div class="all_btn">
  <button class="try_btn">Try Again</button>
  <button class="close_btn">No Thanks</button>
</div`
tryAgain.innerHTML = all

setTimeout(() => {
    body.after(tryAgain)
    let all_btn = Array.from(document.querySelectorAll('.alert .all_btn button '))
    all_btn.forEach(btn => {
        btn.addEventListener("click", e => {
            if (e.target.className == "try_btn") {
                window.location = "../start/index.html"
                e.target.parentElement.parentElement.remove()
            } else if (e.target.className == "close_btn") {
                this.close()
                e.target.parentElement.parentElement.remove()
            }
        })
    })

}, 3000)


