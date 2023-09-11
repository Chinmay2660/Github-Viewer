const fetchButton = document.getElementById("fetch-button");
const usernameInput = document.getElementById("username");
const profileDiv = document.getElementById("profile");

fetchButton.addEventListener("click", () => {
  const username = usernameInput.value;
  if (username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        // Create the profile card
        const profileCard = `
                    <div>
                        <img src="${data.avatar_url}" alt="${data.login}" width="100">
                        <h2>${data.login}</h2>
                        <p>Followers: ${data.followers}</p>
                        <p>Following: ${data.following}</p>
                        <p>Repos: ${data.public_repos}</p>
                    </div>
                `;
        profileDiv.innerHTML = profileCard;
      })
      .catch((error) => {
        console.error(error);
        profileDiv.innerHTML = "<p>User not found</p>";
      });
  }
});
