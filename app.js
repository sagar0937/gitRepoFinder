
//github 
let github = new GitHub();
//ui
let ui = new UI();

const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup',searchUsers);

function searchUsers(e){
    const user = e.target.value;
    if(user !== ''){
        //http call
        github.getUsersDetails(user)
        //return a promise
            .then((data)=>{
                if(data.response.message ==='Not Found'){
                    
                    //error message
                    ui.showAlert(`user not found`,`alert alert-danger`);
                }else{
                    //show profile
                    ui.showProfile(data.response);
                    ui.showRepos(data.repos)
                }
            })
    } else {
        //clear profile
        ui.clearProfile();
    }

    e.preventDefault();
}