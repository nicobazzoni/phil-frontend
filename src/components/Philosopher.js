class Philosopher{

  constructor(data, branch_id){
    this.data = data
    this.branchId = branch_id
    
  }

  
  
  static handleSubmit = (e) => {
    e.preventDefault()
    modal.close()
    
    
   
    const newPhilosopher = {
      
      name: e.target.name.value,
      idea: e.target.idea.value,
      image: e.target.image.value,
      branch_id: e.target.branchId.value,
      user_id: user.id 
       
    }
    newPhilosopher.user_id = user.id
    console.log(newPhilosopher)
    
    api.createPhilosopher(newPhilosopher)
    .then(data => console.log(data))
    .then(philosopher => {
      let newPh = new Philosopher(philosopher)
      newPh.render()
      
    })
    e.target.reset()
    
    // renderIndex()
  }

  static openPhilosopherForm = () => {
    
    modal.main.innerHTML = `
    <h1>Add Your Philosopher</h1>
    
    <form>
    <label for="branch-dropdown">Philosopher:</label>
    <select name="branchId" id="branch_dropdown">
    <option value= "1">Logic</option>
    <option value= "2">Existentialism</option>
    <option value= "3">Metaphysics</option>
    <option value= "4">Epistemology</option> 
    <option value= "5">Ontology</option> 
    </select>
    <label for="name">Name:</label><br>
    <input type="text" name="name"><br>
    
    <label for="idea">Idea:</label><br>
    <input type="text" name="idea"><br>
    
    <label for="image">Image:</label><br>
    <input type="text" name="image"><br>
    <input type="submit" value="Create Philosopher!"><br>
    </form>
    `
    modal.main.querySelector("form").addEventListener("submit", this.handleSubmit)
    modal.open()
  }
  static getPhilos = () => {
    
    api.getPhilosophers().then(philosophers => {
      console.log(philosophers)
      Philosopher.all = []
      philosophers.forEach(philosopher => {
       new Philosopher(philosopher)
       
      })
  })
 }
      
        
      
    render = () => {
      
     const { name, image, idea, id, username } = this.data
    document.querySelector(".container").innerHTML += `
    <div class="philosopher-card" data-id=${this.id}>
      <h1>${name}</h1>
      <img src=${image} 
      <h1>${idea}</h1>
      <p> Written by:${username}</p>
      <button onclick= "deletePhilosopher(${this.id})">Delete</button>
    </div>
    `
    
  }
  static deletePhilosopher = (id) => {
    let philsopherContainer = document.getElementById("container")
    fetch(this.api + id,  {
        method: "DELETE"
    })
    .then(res => {
        philosopherContainer.innerHTML = ""
        getPhilos()

    })
  }
}