


let allBtn = Array.from(document.querySelectorAll(".sideBar .container .nav .list li"))
let admin = document.querySelector(".dashboard")
let dash = `
<div class="container">
<div class="users">
  <h2 class="heading">Analytics Overview</h2>
  <div class="all">
    <div class="account">
      <img src="./img/user.png" alt="" />
      <div class="text">
        <h3>28.7K</h3>
        <p>Total Account</p>
      </div>
    </div>
    <div class="followers">
      <img src="./img/public-relation.png" alt="" />
      <div class="text">
        <h3>1.7K</h3>
        <p>Impression</p>
      </div>
    </div>
    <div class="visit">
      <img src="./img/tap.png" alt="" />
      <div class="text">
        <h3>48K</h3>
        <p>total Engagement</p>
      </div>
    </div>
    <div class="rate">
      <img src="./img/star.png" alt="" />
      <div class="text">
      <h3>1K</h3>
        <p>Convertion Rate</p>
        </div>
        </div>
        </div>
</div>
<div class="analyse">
  <div class="followers">
    <h2 class="heading">Followers</h2>
    <div class="chart">
      <canvas id="myChart" width="350px" height="300px"></canvas>
    </div>
  </div>

</div>
</div>


`
admin.innerHTML = dash


let add = `  <div class="container">
<div class="box">
<h2>Add Question</h2>
<textarea name=""  placeholder="Add Question" id="qstinp" cols="30" rows="10"></textarea>
<button class="add"> Another Question  <img src="./img/paper-plane.png" alt=""> </button>
</div>
</div>`

let repo = `<h1>Sorry I dont Have A Time <img src="./img/crying.png" alt="">
</h1>`

function question(question) {
  return {
    question: question
  }
}

allBtn.forEach(ele => {
  ele.addEventListener("click", e => {
    allBtn.forEach(btn => {
      btn.classList.remove("active")
    })
    if (e.currentTarget.className == "dash") {
      e.currentTarget.classList.add("active")
      admin.innerHTML = dash
    } else if (e.currentTarget.className == "qst") {
      admin.innerHTML = add
      e.currentTarget.classList.add("active")
      let addbtn = document.querySelector(".dashboard .container .box .add")
      let textinp = document.querySelector(".dashboard .container .box #qstinp")
      let box = document.querySelector(".dashboard .container .box ")
      let img = document.createElement("img")
      img.src = "./img/check.png"
      let all_qst = []
      addbtn.addEventListener("click", e => {
        e.preventDefault()
        if (textinp.value != "") {
          box.appendChild(img)
          all_qst.push(question(textinp.value))
          window.sessionStorage.setItem(`question`, JSON.stringify(all_qst))
          textinp.value = ""
          setTimeout(() => {
            box.lastElementChild.remove()
          }, 1000)
          textinp.focus()
        }
      })




    } else if (e.currentTarget.className == "repo") {
      admin.innerHTML = repo
      e.target.classList.add("active")
    } else if (e.currentTarget.className == "logout") {

      window.location = "../login/index.html"
    }

  })
})


const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

