
      
class ApiService {

  constructor(api){
    this.api = api
  }

  getPhilosophers= () => fetch(this.api + "/philosophers").then(res => res.json())
  
  getBranches = () => fetch(this.api + "/branches").then(res => res.json())
 
  
 
  createPhilosopher = () => {
    const PhilosopherDetails = {
    name: nameInput.value,
    idea: ideaInput.value,
    image: imageInput.value,
  
    branch_id: this.value,
  };

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    
    body: JSON.stringify(PhilosopherDetails),
  }; {
    
     fetch(this.api + "/philosophers", configObj)
     
     .then((res) => res.json())
    fetch(this.api, configObj)
       
       
        .then((json) => {
          const i = new Philosopher({ id: json.data.id, ...json.data.attributes });
          i.attachDOM();
          
          if (!Branch.all.find((c) => c.id == i.branchId)) {
            let branchObj = new Branch({
              id: i.branchId,
              name: json.data.attributes.branch_name,
            });
           
          }
        });
  }
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
  
