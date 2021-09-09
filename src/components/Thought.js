class Thought {

    constructor(data, philosopher){
      this.data = data
      this.philosopher = philosopher
    }
  
    render = () => {
      const {  idea, category} = this.data
      document.querySelector(".container").innerHTML += `
      <div class="card">
        <p>${idea}</p>
        <p>${category}</p>
       
      </div>
      `
    }
  
  }