//footer element
const newFooterChild = document.createElement("f")
newFooterChild.setAttribute("id", "newFooter")
//newFooterChild.textContent = "This is a new footer child"
// why do we do document.body & not document.footer?
document.body.appendChild(newFooterChild)
//test
console.log(newFooterChild)

// getting the year
var today = new Date()
var thisYear = today.getFullYear()
//test
console.log(thisYear)

//footer finding the added newFooter
var footer = document.querySelector("newFooter")
//test
console.log("newFooter")

//creating the copyright
var copyright = document.createElement("p")
//const copyrightSymbol =
copyright.innerHTML = "\u00A9" + "Laura A. Floyd" + " " + thisYear
//test
console.log(copyright)

//append the copyright
newFooterChild.appendChild(copyright)
//test
console.log(newFooter)

//adding style to footer w/ DOM
newFooter.style.color = "hotpink"
newFooter.style.textAlign = "center"

//skills section

var skills = [
  "javascript",
  "html",
  "css",
  "github",
  "REST APIs",
  "Excel",
  "SQL",
]

var skillsSection = document.getElementById("skills-section")
//console.log(skillsSection)

//var skillsList = skillsSection.querySelector("ul")

var skillsList = document.getElementById("skills-list")
//test console.log(skillsList)

for (let i = 0; i < skills.length; i++) {
  //console.log(skills[i])
  var skill = document.createElement("li")
  skill.innerText = skills[i]
  skillsList.appendChild(skill)
}

// DOM content loaded was recommended by CTD AI
//Used getElementbyID vs. querySeclector originally

document.addEventListener("DOMContentLoaded", function () {
  var messageForm = document.querySelector("#form form") // document.getElementById("leave_message")
  messageForm.addEventListener("submit", function (event) {
    event.preventDefault() // ctd ai helper suggested I add this but idk why

    var usersName = event.target.usersName.value
    var usersEmail = event.target.usersEmail.value
    var usersMessage = event.target.usersMessage.value

    //TEST
    console.log(usersName)
    console.log(usersEmail)
    console.log(usersMessage)

    alert("Message was submitted")

    var messageSection = document.querySelector("#messages")
    var messageList = messageSection.querySelector("ul")
    var newMessage = document.createElement("li")

    newMessage.innerHTML = `
      
        <a href="mailto:${usersEmail}">${usersName}</a>
        <span>${usersMessage}</span>
  
    `

    var removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("removeButton", function (clickEvent) {
      var entry = this.parentNode
      entry.remove()
    })

    newMessage.appendChild(removeButton)

    messageList.appendChild(newMessage)

    messageForm.reset()
  })
})

fetch(`https://api.github.com/users/lafbeauty/repos`)
  .then((response) => response.json())
  .then((data) => {
    const repositories = data
    console.log(repositories)

    const projectSection = document.getElementById("projects-section")
    const projectList = projectSection.querySelector("ul")

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li")
      project.innerText = repositories[i].name
      projectList.appendChild(project)
    }
  })

  .catch((error) => console.log("not working", error))
