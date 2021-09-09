class Modal {

    constructor(){
      this.addCloseEventListener()
    }
  
    get modal(){
      return document.querySelector("#myModal")
    }
  
    get main(){
      return document.getElementById("modal-main")
    }
    
    
  
  
    open = () => {
      this.modal.style.display = "block"
    }
  
    close = () => {
      this.modal.style.display = "none"
    }
   //click on x or exterior the modal will close 
    addCloseEventListener = () => {
      this.modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("close") || e.target.id == "myModal"){
          this.close()
        }
      })
    }
  
  
  }