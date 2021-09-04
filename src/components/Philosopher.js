class Philosopher {

  static all = []

  constructor(data){
    this.data = data
    this.constructor.all.push(this)
  }

  renderShow = () => {
    const { name, idea, section, image, } = this.data
    
    document.getElementById("main").innerHTML = `
    <div class="show">
      <h1>${name}</h1>
      <img src="${image}" alt=${name}/>
      <p>${idea}</p>
      <h1>  ${section}</h1>
    </div>
    <button class="button" id="goBack">Back</button>
    `
    document.getElementById("goBack").addEventListener("click", Philosopher.renderIndex)
    
  }

  renderCard = () => {
    const {  name, image, id } = this.data
    document.getElementById("philosopher-container").innerHTML += `
    <div class="philosopher-card" data-id=${id}>
      <img src=${image} alt=${name}/>
      <p class="title">${name}</p>
      
      <button type="button" class="button">✩</button> 
      <div id="myProgress">
      <div id="myBar"></div>
    </div>
    <button onclick="move()">Click Me</button> 
    
    </div>`
    
  }
  
  static handleSubmit = (e) => {
    e.preventDefault()
    const newPhilosopher = {
      name: e.target.name.value,
      idea: e.target.idea.value,
      image: e.target.image.value,
      section: e.target.section.value
    
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
      <label for="section">section</label><br>
      <input type="text" name="section"><br>
      <label for="image">Image:</label><br>
      <input type="text" name="image"><br>
      <input type="submit" value="List this Philosopher!"><br>
    </form>
    `
    modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
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
    const addPhilosopher = document.createElement("button")
    addPhilosopher.innerText = "Add a new Philosopher"
    addPhilosopher.addEventListener("click", this.openPhilosopherForm)
    main.append(philosopherContainer, addPhilosopher)
    this.all.forEach(philosopher => philosopher.renderCard())
    philosopherContainer.addEventListener("click", this.handleIndexClick)
  }

  static handleIndexClick = (e) => {
    if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
      const id = e.target.closest(".philosopher-card").dataset.id
      this.find(id).renderShow()
    }
  }
 
   
  
static move() {
  const i = 0
  if (i == 0) {
    i = 1;
    const elem = document.getElementById("myBar");
    const width = 1;
    const id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
  







}