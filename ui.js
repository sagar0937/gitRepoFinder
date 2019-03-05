class UI {
    constructor() {
      this.profile = document.getElementById('profile');
    }
  //show profile
    showProfile(user) {
      this.profile.innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Login: ${user.login}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
      `;
    }
    //show repos
    showRepos(data){
        let output = '';
        data.forEach(element => {
            console.log(element);
               output += `<li>${element.name}</li>`
        });
        document.querySelector('#repos').innerHTML = output;
    }
    showAlert(msg,className){
        this.clearAlert();
        let div = document.createElement('div');
        div.className = className;
        div.innerText = msg;
        //get parent
        let searchContainer = document.querySelector('.searchContainer');
        //get another div
        let searchUser = document.querySelector('.search');
        //where u want to insert the div
        searchContainer.insertBefore(div,searchUser);

        //to remove alert after 3 sec
        setTimeout(()=>{
            this.clearAlert()
        },3000)
        
    }

    clearAlert(){
       //clear remainin alert
          let errorClear = document.querySelector('.alert');
          if(errorClear){
            errorClear.remove();
          }
       
    }
    //clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
  }