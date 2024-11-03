// DOM Elements
const skillsSection = document.getElementById("skills-section")
const skillsList = document.getElementById("skills-list")
const projectList = document.getElementById("gitHub")

// Skills Data
const skills = [
  "javascript",
  "html",
  "css",
  "github",
  "REST APIs",
  "Excel",
  "SQL",
]

// Initialize Skills
function initializeSkills() {
  if (!skillsList) {
    console.error("Skills list element not found")
    return
  }

  skills.forEach((skillName) => {
    const skill = document.createElement("li")
    skill.innerText = skillName
    skillsList.appendChild(skill)
  })
}

// Initialize Projects
async function initializeProjects() {
  if (!projectList) {
    console.error("Project list element not found")
    return
  }

  try {
    const response = await fetch("https://api.github.com/users/lafbeauty/repos")
    const repositories = await response.json()

    repositories.forEach((repo) => {
      const project = document.createElement("li")
      project.innerText = repo.name
      projectList.appendChild(project)
    })
  } catch (error) {
    console.error("Failed to fetch GitHub repositories:", error)
  }
}

// Initialize Form
function initializeForm() {
  const messageForm = document.querySelector("#form form")
  if (!messageForm) {
    console.error("Message form not found")
    return
  }

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault()

    alert("Message was submitted")

    const usersName = event.target.usersName.value
    const usersEmail = event.target.usersEmail.value
    const usersMessage = event.target.usersMessage.value

    const messageSection = document.querySelector("#messages")
    const messageList = messageSection.querySelector("ul")

    const newMessage = document.createElement("li")
    newMessage.innerHTML = `
            <a href="mailto:${usersEmail}">${usersName}</a>
            <span>${usersMessage}</span>
        `

    const removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function () {
      this.parentNode.remove()
    })

    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage)
    messageForm.reset()

    // alert("Message was submitted");
  })
}

// Initialize Copyright
function initializeCopyright() {
  const footer = document.getElementById("page-footer")
  if (!footer) {
    console.error("Footer not found")
    return
  }

  const copyright = document.createElement("p")
  const thisYear = new Date().getFullYear()
  copyright.innerHTML = `\u00A9 Laura A. Floyd ${thisYear}`
  //copyright.style.color = 
  copyright.style.textAlign = "center"

  footer.appendChild(copyright)
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Initializing all sections...")
  initializeSkills()
  initializeProjects()
  initializeForm()
  initializeCopyright()
})
