document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avata');
    const nome = document.querySelector('#nome');
    const username = document.querySelector('#username');
    const repo = document.querySelector('#reposi');
    const follwers = document.querySelector('#Seguidor');
    const following = document.querySelector('#seguindo');
    const link = document.querySelector('#link')

    fetch('https://api.github.com/users/hiberNT')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        avatar.src = json.avatar_url;
        nome.innerText = json.name;
        username.innerText = json.login;
        repo.innerText = json.public_repos;
        follwers.innerText = json.followers
        following.innerText = json.following
        link.href = json.html_url
    })
})