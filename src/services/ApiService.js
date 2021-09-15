
      
class ApiService {

  constructor(api){
    this.api = api
  }

  getPhilosophers= () => fetch(this.api + "/philosophers").then(res => res.json())
  
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
      
      return fetch(`${this.api}/philosophers/${id}`,{
    
      method: "DELETE",
      }).then(() => {
        console.log('removed')
      }).catch(err => {
        console.error(err)
      })
      
     
      
  
  }
}
  
