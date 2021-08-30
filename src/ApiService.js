class ApiService {

    constructor(rootUrl){
      this.api = rootUrl
    }
  
    getPhilosophers = () => fetch(this.api + "/philosophers").then(res => res.json())
  
    createPhilosopher = (philosopher) => fetch(this.api + "/philosophers", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(philosopher),
    })
    .then(res => res.json())
  
    likePhilosopher = (id, likes) => fetch(`${this.api}/philosophers/${id}`, {
        method: 'PATCH', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes: likes}),
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

          // notes section 
          getNotes = () => fetch(this.api + "/philosophers").then(res => res.json())

          createNote = (note) => fetch(this.api + "/philosophers", {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
          })
          .then(res => res.json())
          
          
        
          deleteNote = (id) => fetch(`${this.api}/philosophers/${id}`, {
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
      