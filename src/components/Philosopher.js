class Philosopher {

  static all = []

  constructor(data){
    this.data = data
    
    this.thoughts = this.data.thoughts.map(thought => new Thought(thought, this))
    this.constructor.all.push(this)
  }

  renderShow = () => {
    const { name, idea, category, image } = this.data
    
    document.getElementById("main").innerHTML = `
    <div class="show">
      <h1>${name}</h1>
      <img src="${image}" alt=${name}/>
     <h3> ${idea} </h3>
     <p> ${category} </p>
     <div class="container"></div>
    </div>
    <button  id="goBack">Back</button>
   
    `
    document.getElementById("goBack").addEventListener("click", Philosopher.renderIndex)
    this.thoughts.forEach(thought => thought.render())
    
    
  }

  renderCard = () => {
   
    const {  name, image, id, } = this.data
    document.getElementById("philosopher-container").innerHTML += `
    
    <div class="philosopher-card card" data-id=${id}>
    <img src=${image} alt=${name}/>
    
    <p class="title">${name}</p>
    <p class="idea-bar"> ideas: ${this.thoughts.length}</p>
    </div>`
 
  }
  renderThoughtData = () => {
    modal.open()
    modal.main.innerHTML = ""
    const thoughtList = document.createElement("ul")
    modal.main.appendChild(thoughtList)
    this.thoughts.forEach(thought => {
      thoughtList.innerHTML += `<li>${thought.data.idea}: ${thought.data.category}</li>`
    })
  }
  
  static handleSubmit = (e) => {
    e.preventDefault()
     const newPhilosopher = {
      name: e.target.name.value,
      idea: e.target.idea.value,
      image: e.target.image.value,
      category: e.target.category.value,
      
    }
    api.createPhilosopher(newPhilosopher).then(philosopher => {
      new Philosopher(philosopher).renderCard()
    })
    modal.close()
    e.target.reset()
  }

 
  

  

  static openPhilosopherForm = () => {
   
    modal.main.innerHTML = `
    <h1>Add Your Philosopher</h1>

    <form>
      <label for="name">Name:</label><br>
      <input type="text" name="name"><br>
      <label for"idea">idea:</label><br>
      <input type="text" name="idea"><br>
      <label for="category">category</label><br>
      <input type="text" name="category"><br>
      <label for="image">Image:</label><br>
      <input type="text" name="image"><br>
      <input type="submit" value="List this Philosopher!"><br>
    </form>
    `
    modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
    
  }
  
  static openEditPhilosopherForm = () => {
    modal.main.innerHTML = `
    <h1>Edit this Philosopher</h1>

    <form>
      <label for="name">Name:</label><br>
      <input type="text" name="name"><br>
      <label for"idea">idea:</label><br>
      <input type="text" name="idea"><br>
      <label for="category">category</label><br>
      <input type="text" name="category"><br>
      <label for="image">Image:</label><br>
      <input type="text" name="image"><br>
      <label for="notes">notes:</label><br>
      <input type="text" name="notes"><br>
      <input type="submit" value="List this Philosopher!"><br>
    </form>
    `
    modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
  }
  



  static find = (id) => this.all.find(philosopher => philosopher.data.id == id)

  static getPhilosophers = () => {
    api.getPhilosophers().then(philosophers => {
      Philosopher.all = []
      philosophers.forEach(philosopher => new Philosopher(philosopher))
      this.renderIndex()
    })
  }

  static renderIndex = () => {
    const main = document.getElementById("main")
    main.innerHTML = ""
    const philosopherContainer = document.createElement("div")
    philosopherContainer.id = "philosopher-container"
    const addPhilosopher = document.createElement("button")
    addPhilosopher.innerText = "Add a new Philosopher"
    addPhilosopher.addEventListener("click", this.openPhilosopherForm)
    main.append(addPhilosopher, philosopherContainer )
    this.all.forEach(philosopher => philosopher.renderCard())
    philosopherContainer.addEventListener("click", this.handleIndexClick)
    
  }

  static handleIndexClick = (e) => {
    if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
      const id = e.target.closest(".philosopher-card").dataset.id
      this.find(id).renderShow()
    } else if (e.target.classList.contains("idea-bar")){
        const id = e.target.closest(".philosopher-card").dataset.id
        this.find(id).renderThoughtData()
      }
    }
  
  
}