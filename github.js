class GitHub {
constructor(){
    this.clientId = '70c91bd05dad260a4eaf';
    this.secretId = 'da75ef85a24620371fb9c075c0e381427d457157';
    this.repo_count = 5;
    this.repo_sort = 'created: asc';

}
//async call
async getUsersDetails(user){
    //to get user details
   let responseData = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.secretId}`);
   let response = await responseData.json();

    //to get repo details
   let repoData = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}client_id=${this.clientId}&client_secret=${this.secretId}`);
   let repos = await repoData.json();
   return {
       response,
       repos
   }
}
}