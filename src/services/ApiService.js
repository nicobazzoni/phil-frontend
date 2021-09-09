
      
class ApiService {

  constructor(api){
    this.api = api
  }

  getPhilosophers= () => fetch(this.api + "/philosophers").then(res => res.json())
  
  createPhilosopher = (newPhilosopher) => {
    return fetch(this.api + "/philosophers", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(newPhilosopher),
    })
    .then(response => response.json())
  }

   
    

    deletePhilosopher = () => {
      
    return   fetch(`${API}/philosophers/${philosopher.id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => div.remove())
  }
  

  
    
}
  
