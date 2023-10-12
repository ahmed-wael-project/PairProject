let heading = document.getElementsByClassName("heading")[0]
let text = document.querySelector(".resault .container .text ul li")

let result = localStorage.getItem("person")
heading.innerHTML = `Thank You You Are ${JSON.parse(result)} Person`
console.log(text)

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