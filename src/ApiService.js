
      
class ApiService {

  constructor(api){
    this.api = api
  }

  getPhilosophers= () => fetch(this.api + "/philosophers").then(res => res.json())
  
  createPhilosopher = (philosopher) => fetch(this.api + "/philosophers", {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(philosopher),
  })
  .then(res => res.json())

  deletePhilosopher = (id) => fetch(`${this.api}/philosophers/${id}`, {
    method: 'DELETE', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
      body: null
  })
      .then(response => {
        return response.json( )
    })
    .then(data => 
        // this is the data we get after putting our data, do whatever you want with this data
        console.log(data))
        .then(() => {
          window.location.reload()
        })
}