document.addEventListener("DOMContentLoaded", () => {
    const postsList = document.getElementById("posts-list");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
  
    if (posts.length === 0) {
        postsList.innerHTML = `
          <div style="text-align: center; margin-top: 2rem;">
            <p>No blog posts yet.</p>
            <a href="new-post.html" class="new-post-cta">+ Create New Post</a>
          </div>
        `;
        return;
      }
      
  
    posts.forEach((post) => {
      const postCard = document.createElement("div");
      postCard.className = "post-card";
      postCard.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content.substring(0, 100)}...</p>
        <a href="post.html?id=${post.id}">Read More</a>
      `;
      postsList.appendChild(postCard);
    });
  });
  