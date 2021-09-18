class Thought {

    constructor(data, philosopher){
      this.data = data
      this.philosopher = philosopher
    }
  
    render = () => {
      const {category,idea } = this.data
      document.querySelector(".container").innerHTML += `
      <div class="card">
      <label for"category">category:</label><br>
      <h1>${category}</h1>
      <label for"idea">Idea:</label><br>
        <p>${idea}</p>
      
        
       
      </div>
      `
      this.thoughts.forEach(thought => thought.render())
    }
    
    
    static handleThought = (e) => {
      e.preventDefault()
       const newThought = {
        category: e.target.category.value,
        idea: e.target.idea.value
      }
      api.createThought(newThought).then(thought => {
        
        new Thought(thought).render()
      })
      modal.close()
      e.target.reset()
    }

   
    
    
    static openThoughtForm = () => {
    
      
      
    
      modal.main.innerHTML = `
      <h1>Thought</h1>
  
      <form>
      
        <label for"idea">idea:</label><br>
        <input type="text" name="idea"><br>
        <label for="category">category</label><br>
        <input type="text" name="category"><br>
        
        <label for="philosophers">Choose a Philosopher:</label>
        
        <select name="philosophers" id="philosophers">
        <optgroup label="Philosophers">
       <option value="p">Philosopher</option>
       </optgroup>
       </select>
       <br><br>
        <input type="submit" value="List this Thought!"><br>
      </form>
      `
      modal.main.querySelector("form").addEventListener("submit", this.handleThought)
      modal.open()
      
    }
    
    renderThoughtInfo = () => {
      modal.open()
      modal.main.innerHTML = ""
      const thoughtList = document.createElement("ul")
      modal.main.appendChild(thoughtList)
      this.thoughts.forEach(thought => {
        console.log(this)
      thoughtList.innerHTML += `<li>${thought.data.idea} $${thought.data.category}</li>`
    })
  }


    static findThought = (id) => this.all.find(thought => thought.data.id == id)

    static getPhilos= () => {
      api.getPhilosophers().then(philosophers => {
        Philosopher.all = []
        philosophers.forEach(philosopher => new Philosopher(philosopher))
        this.philosopherStream()
      })
    }
  }