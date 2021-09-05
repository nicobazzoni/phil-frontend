
      
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
  addToFav = (id, favorites) => fetch(`http://localhost:3000/philosophers/${id}`,{
      method: "POST",
      headers: { 
        "Content-Type" : "application/json",
        
      },
        body: JSON.stringify({favorites: favorites} )
    })
    .then(res => res.json())
    .then(console.log)
    }
   
    editPhilosopher = (notes, id) => {
      return fetch(`http://localhost:3000/philosophers/${id}`, {
      method: "PATCH",
      headers: {
      "Content-type": "application/json",
      "accept": "application/json"
       },      
      
      body: JSON.stringify({notes: notes})
      })
      .then(res => res.json())
      .then(notes => {
      getphilosophers()
      notes.reset()
      })
    }
      
      deletePhilosopher = (id) => {
        return fetch(`http://localhost:3000/philosophers/${id}`, {
          method: 'DELETE'
        }).then(() => {
           console.log('removed');
        }).catch(err => {
          console.error(err)
        });
      
    
}