class Philosopher{

  constructor(data, branch){
    this.data = data
    this.branch = branch
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

}