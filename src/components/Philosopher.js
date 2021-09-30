class Philosopher{

  constructor(data, branch_id){
    this.data = data
    this.branchId = branch_id
    
  }

  render = () => {
    const { name, image, idea } = this.data
    document.querySelector(".container").innerHTML += `
    <div class="card">
      <h1>${name}</h1>
      <img src=${image} alt=${image}/>
      <p>$${idea}</p>
   
    </div>
    `
  }
  
  
  static handleSubmit = (e) => {
    e.preventDefault()
    let branch_id = this.id
    const newPhilosopher = {
      
      name: e.target.name.value,
      idea: e.target.idea.value,
      image: e.target.image.value,
      branch_id: e.target.branch_id.value
    }
    console.log(newPhilosopher)
    api.createPhilosopher(newPhilosopher).then(Philosopher => {
      new Philosopher(philosopher).render()
    })
    modal.close()
    e.target.reset()
  }
  static openPhilosopherForm = () => {
   
    modal.main.innerHTML = `
    <h1>Add Your Philosopher</h1>

    <form>
    <label for="philosopher-dropdown">Philosopher:</label>
    <select name="philosopherId" id="philosopher-dropdown">
                 <option value= "1">Logic</option>
                <option value= "2">Epistemology</option>
                <option value= "3">Ontology</option>
                <option value= "4">Existentialism</option> 
                <option value= "5">Metaphysics</option> 
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
  static getPhilosophers = () => {
    api.getPhilosophers().then(philosophers => {
      Philosopher.all = []
      philosophers.forEach(philosopher => new Philosopher(philosopher))
      this.renderIndex()
    })
  }
}