
class Branch {

  static all = []

  constructor(data){
    this.data = data
    
    this.philosophers = this.data.philosophers.map(philosopher => new Philosopher(philosopher, this))
    this.constructor.all.push(this)
  }

  renderShow = () => {
    const { name, id, username } = this.data
    
    const addphilosopher = document.createElement("button")
    addphilosopher.innerText = "Add philosopher"
    addphilosopher.addEventListener("click", this.openPhilosopherForm)
    
    document.getElementById("main").innerHTML = `
    <div class="show">
    <p> Branch: ${name} </p>
    <p> Done by: ${username} </p>
    
   
    <div class="container"></div>
    </div>
    <button  id="philosopher-btn">Add philosopher</button>
    <button  id="goBack">Back</button>
    
    `
    document.getElementById("philosopher-btn").addEventListener("click", Philosopher.openPhilosopherForm)

    document.getElementById("goBack").addEventListener("click", Branch.renderIndex) 
    this.philosophers.forEach(philosopher => philosopher.render())
  }

  
  renderCard = () => {
    const {  name, id,  } = this.data
    document.getElementById("branch-container").innerHTML += `
    
    <div class="branch-card card" data-id=${id}>
    
  
   
    <p class="title">${name}</p>
   
    <p class="idea-bar"> ideas: ${this.philosophers.length}</p>
    
    </div>`
    
   
}






  

  
  
  
    
    
    
  //1. add form 2. add event listener. 3. handle submit
  
  

 
 
  

  static find = (id) => this.all.find(branch => branch.data.id == id)
  
  
  
  static getBranches = () => {
    api.getBranches().then(branches => {
      Branch.all = []
      branches.forEach(branch => new Branch(branch))
      this.renderIndex()
    })
  }

  
  
  
  static renderIndex = () => {
    const main = document.getElementById("main")
    main.innerHTML = ""
    
    const branchContainer = document.createElement("div")
    branchContainer.id = "branch-container"
    branchContainer.classList.add("container")

 
   
     
    main.append(branchContainer)
  
    this.all.forEach(branch => branch.renderCard())
    
    branchContainer.addEventListener("click", this.handleIndexClick)
    
  }

  static handleIndexClick = (e) => {
    
    if (e.target.tagName == "IMG" || e.target.classList.contains("title")){
      const id = e.target.closest(".branch-card").dataset.id
      this.find(id).renderShow()
    } else if (e.target.classList.contains("idea-bar")){
        const id = e.target.closest(".branch-card").dataset.id
        this.find(id).renderPhilosopherInfo()

    
      } 
    }
  
      
  
  
}