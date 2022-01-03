
//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
const body = document.body;
document.getElementById('darkMode').onclick = () => {
    body.classList.replace('light','dark');
}
document.getElementById('lightMode').onclick = () => {
    body.classList.replace('dark','light');
}

function getUserInfo(userName){
    if(userName == null){
        var userName = document.getElementById('searchbar').value; 
    }
    
    fetch('https://api.github.com/users/'+userName)
    .then(response => response.json())
    .then(data => {
        
        fetch(data.repos_url)
        .then(response => {
            if(!response.ok){
                document.getElementById("searchbar").value = "Error! Check for spelling and/or if the name is valid";
            }
            return response.json()
        })
        .then(repo => {
                console.log(data);
            if(data.message && data.message == "Not Found"){
                document.getElementById("searchbar").value = "User Not Found";
                return;
            }
            if(data.name == null){
                document.getElementById("username").textContent = data.login;
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
            
            document.getElementById("repos").textContent = repo.length
        });
        
    }
).catch((error) => {
    console.error('Error:', error);
  });
}

    