
//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

function getUserInfo(){
    var userName = document.getElementById('searchbar').value; 
    fetch('https://api.github.com/users/'+userName)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("username").innerHTML = data.name;
        document.getElementById("location").innerHTML = data.location;
        document.getElementById("tag").innerHTML = "@" + data.login;
        document.getElementById("date-joined").innerHTML = data.created_at;
        document.getElementById("bio").innerHTML = data.bio;
        document.getElementById("userAvatar").src = data.avatar_url;
        document.getElementById("following").innerHTML = data.following;
        document.getElementById("followers").innerHTML = data.followers;
        document.getElementById("work").innerHTML = data.company;
        document.getElementById("github").innerHTML = data.html_url;
        
        fetch(data.repos_url)
        .then(response => response.json())
        .then(data => document.getElementById("repos").innerHTML = data.length);
        
    }
);
}

    