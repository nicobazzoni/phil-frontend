class Philosopher {

  static all = []

  constructor(data){
    this.data = data
    this.constructor.all.push(this)
  }

  renderShow = () => {
    const { name, idea, teamName, image } = this.data
    document.getElementById("main").innerHTML = `
    <div class="show">
      <h1>${name}</h1>
      <img src="${image}" alt=${name}/>
      <p>${idea}</p>
      <h1>  ${teamName}</h1>
      <button class="delete-btn">Delete</button>
    </div>
    <button id="goBack">Go Back</button>
    `
    document.getElementById("goBack").addEventListener("click", Philosopher.renderIndex)
  }

  renderCard = () => {
    const {  name, idea, teamName, image, id } = this.data
    document.getElementById("philosopher-container").innerHTML += `
    <div class="philosopher-card" data-id=${id}>
      <img src=${image} alt=${name}/>
      <p class="title">${name}</p>
      <p>${idea}</p>
      <h2>  ${teamName}</h2>
      <button class="delete-btn">Delete</button>
    </div>`
  }

  deleteCard = () => {
    const {  name, idea, teamName, image, id } = this.data
    document.getElementById("philosopher-container").innerHTML 
    api.deletePhilosopher(this.data.id).then(philosopher => {
      this.data = philosopher
       
      card.innerHTML = this.generateHTML()
      
      //abstracted from above function
    })
  }

  static find = (id) => this.all.find(philosopher => philosopher.data.id == id)

  static getPhilosophers = () => {
    api.getPhilosophers().then(philosophers => {
      philosophers.forEach(philosopher => new Philosopher(philosopher))
      this.renderIndex()
    })
  }

  static renderIndex = () => {
    const main = document.getElementById("main")
    main.innerHTML = ""
    const philosopherContainer = document.createElement("div")
    philosopherContainer.id = "philosopher-container"
    main.appendChild(philosopherContainer)
    this.all.forEach(philosopher => philosopher.renderCard())
    philosopherContainer.addEventListener("click", this.handleIndexClick)
  }

  static handleIndexClick = (e) => {
    if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
      const id = e.target.closest(".philosopher-card").dataset.id
      this.find(id).renderShow()
    }
  }
  static removeDeletedPhilosopher(deleteResponse) {
    this.philosophers = this.philosophers.filter( philosopher => philosopher.id !== deleteResponse.philosopherId )
    this.render()
  }
  static create = (philosopher) => {
    new Philosopher(philosopher).render()
  }

  static getAll = () => {
    api.getPhilosophers().then(philosophers => {
      philosophers.forEach(this.create)
    })
  }

  static handleSubmit = (e) => {
    e.preventDefault()
    const newPhilosopher = {
      name: e.target.name.value,
      image: e.target.image.value,
      idea: e.target.idea.value,
      likes: 0
    }
    api.createPhilosopher(newPhilosopher).then(Philosopher.create)
    e.target.reset()
  }

}
