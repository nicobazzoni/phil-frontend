const api = new ApiService("http://localhost:3000")
const modal = new Modal()
const philosopherNameInput = document.getElementById("philosopher-name")
const dropdown = document.getElementById('philosopher-dropdown')
let user

document.querySelector("form").addEventListener("submit", handleUsernameSubmit)

function handleUsernameSubmit(e){
  e.preventDefault()
  document.getElementById("main").innerHTML = ""
  api.findOrCreateUser(e.target.username.value).then(userData => {
    user = userData
    Branch.getBranches(),
    Philosopher.getPhilosophers()
   
  })
}
