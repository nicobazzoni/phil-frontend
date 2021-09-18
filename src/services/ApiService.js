
      
class ApiService {

  constructor(api){
    this.api = api
  }

  getPhilosophers= () => fetch(this.api + "/philosophers").then(res => res.json())
  
  getThoughts= () => fetch(this.api + "/thoughts").then(res => res.json())
  
  createPhilosopher = (newPhilosopher) => {
    newPhilosopher.user_id = user.id
    return fetch(this.api + "/philosophers", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(newPhilosopher),
    })
    .then(response => response.json())
  }

  createThought = (newThought) => {
    newThought.user_id = user.id
    return fetch(this.api + "/thoughts", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(newThought),
    })
    .then(response => response.json())
  }
  
  
  findOrCreateUser = (username) => {
    return fetch(this.api + "/users", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username}),
    })
    .then(response => response.json())
  

  }
   
  
    deletePhilosopherAction = (id) => {
      let result = confirm("Do you want to delete this movie?")
      if (result){
      let configObj = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          id: this.id
        })
      };
      fetch(`${this.api}/philosophers/${id}`, configObj)

.then(resp=>resp.text())
.then(resp=>alert(resp))
.then(target.parentNode.removeChild(target))
.catch(error=>console.log(error))
}    
}
      
  

}
  
