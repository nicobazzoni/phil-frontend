class Note {

    static all = []
  
    constructor(note){
      this.data = note
      this.constructor.all.push(this)
    }
    
    render = () => {
      const { note, id } = this.data
      dom.noteCollection.innerHTML += `
      <div class="card" data-id=${id}>
      ${this.generateNote()}
      </div>`
    }
  
     generateNote = () => {
      const { note } = this.data
      return `<h2>${note}</h2>
     <button class="delete-btn">Delete</button>`
    }

  
    note = (card) => {
      
      api.likeNote(this.data.id, this.data.notes).then(note => {
        this.data = note
        
        card.innerHTML = this.generateNote() //abstracted from above function
      })
    }
    
    delete = (card) => {
      
      api.deleteNote(this.data.id).then(note => {
        this.data = note
         
        card.innerHTML = this.generateNote()
        debugger
        //abstracted from above function
      })
    }
    
    
    
  
    static find = (id) => this.all.find(note => note.data.id == id)
  
    static handleClick = (e) => {
      if (e.target.classList.contains("new-note-btn")){
        const card = e.target.closest(".card")
        const id = card.dataset.id
        Note.find(id).like(card)
      } else if (e.target.classList.contains("delete-btn")) {
        const card = e.target.closest(".card")
        const id = card.dataset.id
        Note.find(id).delete()
      }
    }
   
    static addEventListeners = () => {
      dom.form.addEventListener("submit", Note.handleSubmit)
      dom.noteCollection.addEventListener("click", Note.handleClick)
    }
  
    static create = (note) => {
      new Note(note).render()
    }
  
    static getAll = () => {
      api.getNotes().then(notes => {
        notes.forEach(this.create)
      })
    }
  
    static handleSubmit = (e) => {
      e.preventDefault()
      const newNote = {
        note: e.target.note.value,
        
      }
      api.createNote(newNote).then(Note.create)
      e.target.reset()
    }
  
    static removeDeletedNote(deleteResponse) {
      this.notes = this.notes.filter( note => note.id !== deleteResponse.noteId )
      this.render()
    }

      
  }
