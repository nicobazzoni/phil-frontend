   class Philosopher {

    static all = []
  
    constructor(philosopher){
      this.data = philosopher
      this.constructor.all.push(this)
    }
    
    render = () => {
      const { name, image, likes, notes, id } = this.data
      dom.philosopherCollection.innerHTML += `
      <div class="card" data-id=${id}>
      ${this.generateHTML()}
      </div>`
    }
  
     generateHTML = () => {
      const { name, idea, image, likes, notes } = this.data
      return `<h2>${name}</h2>
      <h2>${idea}</h2>
      <img src=${image} class="philosopher-avatar" />
      <p>${likes} Likes</p> 
      
  
      <button class="new-note-btn"> 📝</button>
      <button class="like-btn"> 👍</button>
      <button class="delete-btn">Delete</button>`
    }

  
    like = (card) => {
      
      api.likePhilosopher(this.data.id, this.data.likes + 1).then(philosopher => {
        this.data = philosopher
        
        card.innerHTML = this.generateHTML() //abstracted from above function
      })
    }

 
    
    delete = (card) => {
      
      api.deletePhilosopher(this.data.id).then(philosopher => {
        this.data = philosopher
         
        card.innerHTML = this.generateHTML()
        
        //abstracted from above function
      })
    }
    
    
    
  
    static find = (id) => this.all.find(philosopher => philosopher.data.id == id)
  
    static handleClick = (e) => {
      if (e.target.classList.contains("like-btn")){
        const card = e.target.closest(".card")
        const id = card.dataset.id
        Philosopher.find(id).like(card)
      } else if (e.target.classList.contains("delete-btn")) {
        const card = e.target.closest(".card")
        const id = card.dataset.id
        Philosopher.find(id).delete()
      }
    }
   
    static addEventListeners = () => {
      dom.form.addEventListener("submit", Philosopher.handleSubmit)
      dom.philosopherCollection.addEventListener("click", Philosopher.handleClick)
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
  
    static removeDeletedPhilosopher(deleteResponse) {
      this.philosophers = this.philosophers.filter( philosopher => philosopher.id !== deleteResponse.philosopherId )
      this.render()
    }

      
  }