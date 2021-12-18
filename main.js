
//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

function getUserInfo(userName){
    if(userName == null){
        var userName = document.getElementById('searchbar').value; 
    }
    
    fetch('https://api.github.com/users/'+userName)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.message && data.message == "Not Found"){
            document.getElementById("searchbar").value = "User Not Found";
            return;
        }
        if(data.name == null){
            
        }
        else
            document.getElementById("username").textContent = data.name;
        if(data.location == null){
            document.getElementById("location").textContent = "Not Available";
        }
        else
            document.getElementById("location").textContent = data.location;

        var date = new Date(data.created_at).toLocaleDateString('en-CA');
        document.getElementById("tag").textContent = "@" + data.login;
        document.getElementById("date-joined").textContent = "Date joined: " + date;
        document.getElementById("bio").textContent = data.bio;
        document.getElementById("userAvatar").src = data.avatar_url;
        document.getElementById("following").textContent = data.following;
        document.getElementById("followers").textContent = data.followers;
        if(data.company == null){
            document.getElementById("work").textContent = "Not available";
        }
        else
            document.getElementById("work").textContent = data.company;
        document.getElementById("github").textContent = data.html_url;
        
        fetch(data.repos_url)
        .then(response => response.json())
        .then(data => document.getElementById("repos").textContent = data.length);
        
    }
).catch((error) => {
    console.error('Error:', error);
  });
}

    