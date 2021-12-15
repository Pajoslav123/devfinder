
//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
var userName = document.getElementById('searchbar').value; 
userName = "pavleprica";
fetch('https://api.github.com/users/'+userName)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("location").innerHTML = data.name;
        document.getElementById("tag").innerHTML = "@" + data.login;
        document.getElementById("date-joined").innerHTML = data.created_at;
        document.getElementById("bio").innerHTML = data.bio;
        document.getElementById("userAvatar").src = data.avatar_url;
    }
        );
    