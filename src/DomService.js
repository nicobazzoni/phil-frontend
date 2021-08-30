class DomService {

    get addBtn(){
      return document.querySelector("#new-philosopher-btn");
    }
    get quizBtn(){
      return document.querySelector("new-quiz-btn")
    }

    get addNote(){
      return document.querySelector("#new-note-btn");
    }
  
    get philosopherFormContainer(){
      return document.querySelector(".container");
    }
  
    get notesContainer(){
      return document.querySelector(".container")
    }

    get form(){
      return document.querySelector(".add-philosopher-form")
    }

    get note(){
      return document.querySelector(".add-note-form")
    }
  
    get philosopherCollection(){
      return document.getElementById("philosopher-collection")
    }
  
    get noteCollection() {
      return document.getElementById("note-collection")
    }
    


}
  
    
  
  
  