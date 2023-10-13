


let container_sub = document.querySelector(".main .container ")
let content = document.querySelector(".main .container .content ")


const question = {
    1: "You regularly make new friends.",

    2: "You spend a lot of your free time exploring various random topics that pique your interest.",

    3: "Seeing other people cry can easily make you feel like you want to cry too.",

    4: "You often make a backup plan for a backup plan.",

    5: "You usually stay calm, even under a lot of pressure.",

    6: "At social events, you rarely try to introduce yourself to new people and mostly talk to the ones you already know.",

    7: "You prefer to completely finish one project before starting another.",

    8: "You are very sentimental.",

    9: "You like to use organizing tools like schedules and lists.",

    10: "Even a small mistake can cause you to doubt your overall abilities and knowledge.",

    11: "You feel comfortable just walking up to someone you find interesting and striking up a conversation.",

    12: "You are not too interested in discussing various interpretations and analyses of creative works.",

    13: "You are more inclined to follow your head than your heart.",

    14: "You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine.",

    15: "You rarely worry about whether you make a good impression on people you meet.",

    16: "You enjoy participating in group activities.",

    17: "You like books and movies that make you come up with your own interpretation of the ending.",

    19: "Your happiness comes more from helping others accomplish things than your own accomplishments.",

    20: "You are interested in so many things that you find it difficult to choose what to try next.",

    21: "You are prone to worrying that things will take a turn for the worse.",

    22: "You avoid leadership roles in group settings.",

    23: "You are definitely not an artistic type of person.",

    24: "You think the world would be a better place if people relied more on rationality and less on their feelings.",

    25: "You prefer to do your chores before allowing yourself to relax.",

    26: "You tend to avoid drawing attention to yourself.",

    27: "Your mood can change very quickly.",

    28: "You lose patience with people who are not as efficient as you.",

    29: "You usually prefer to be around others rather than on your own.",

    30: "You find it easy to empathize with a person whose experiences are very different from yours.",

    31: "You rarely second-guess the choices that you have made"
}

class questionClass {
    constructor(question) {
        this.question = question
    }

    display() {
        Object.values(this.question).forEach((qst, i) => {
            let test = document.createElement("div")
            test.classList = "question"
            test.innerHTML = `
        <p>${i + 1}.${qst}</p>
        <div class="test">
          <p>Agree</p>
          <div class="list">
            <span data-value="ENFJ"></span>
            <span data-value="ENFJs"></span>
            <span data-value="ENTP"></span>
            <span data-value="ESFJ"></span>
            <span data-value="ENFP"></span>
          </div>
          <p>Desagree</p>
          </div>
          `
            content.appendChild(test)
        })
    }
    check() {
        var test = allbtn.filter(ele => {
            return ele.classList.contains("active")
        })
        if (test.length < Object.keys(question).length) {
            let alert = document.createElement("div")
            alert.classList.add("alert")
            let text = document.createElement("span")
            text.classList.add("text")
            let close = document.createElement("span")
            close.classList.add("close")
            close.textContent="X"
            alert.appendChild(text)
            alert.appendChild(close)
            text.innerHTML = "Please Check Your Answer"
            container_sub.appendChild(alert)


            // let close = document.querySelector(".main .container .alert ")
            close.addEventListener("click", e => {
                e.currentTarget.parentElement.remove()
            })

            window.scrollTo(
                { top: 10, behavior: "smooth" }
            );

        }
        else {
            let obj = {}
            test.forEach(ele => {
                let att = ele.getAttribute('data-value')
                if (obj[att] === undefined) {
                    obj[att] = 1
                } else {
                    obj[att] += 1
                }
            });
            let res = 0
            let prop;
            for (let key in obj) {
                if (obj[key] > res) {
                    res = obj[key]
                    prop = key
                }
            }
            window.localStorage.setItem("person", JSON.stringify(prop))
            window.location = "../res/main.html"
        }
    }

    addToQst() {

        let arrOfQst = JSON.parse(window.sessionStorage.getItem("question"))

        if (arrOfQst) {
            arrOfQst.forEach((ele, i) => {
                let lengthObj = Object.keys(this.question).length
                this.question[lengthObj + 2] = arrOfQst[i].question
            });
        }
    }

}


let test = new questionClass(question)
test.addToQst()
test.display()




//  chose your Pers
let allbtn = Array.from(document.querySelectorAll(".main .container .content .question .list span "))


allbtn.forEach(btn => {
    btn.addEventListener("click", e => {
        Array.from(e.target.closest(".list").children).forEach((child, i) => {
            child.classList.remove("active")
        })
        e.target.classList.add("active")
        e.target.closest(".question").style.opacity = "0.5"
        window.scrollBy(0, 250)
    })
})


// Submit
let btnsbm = document.querySelector(".main .container .submit")

btnsbm.onclick = test.check
