
      
class ApiService {

  constructor(api){
    this.api = api
  }

  getPhilosophers = () => fetch(this.api + "/philosophers").then(res => res.json())
  
  getBranches = () => fetch(this.api + "/branches").then(res => res.json())
 
  
 
  createPhilosopher = (newPhilosopher) => {


  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    
    body: JSON.stringify(newPhilosopher),
  }; 
    
    return fetch(this.api + "/philosophers", configObj)
   
      .then(res => res.json())
      .then(data => console.log(data))
        // .then(json => {
        //   let philo = new Philosopher(json.data)
          
        // philo.render()
        // });
        
  
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
      let result = confirm("Do you want to delete this ?")
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
  
