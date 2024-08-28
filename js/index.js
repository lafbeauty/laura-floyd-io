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
console.log(skillsSection)

//var skillsList = skillsSection.querySelector("ul")

var skillsList = document.getElementById("skills-list")
//test console.log(skillsList)

for (let i = 0; i < skills.length; i++) {
  //console.log(skills[i])
  var skill = document.createElement("li")
  skill.innerText = skills[i]
  skillsList.appendChild(skill)
}
