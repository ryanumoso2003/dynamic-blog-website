document.addEventListener("DOMContentLoaded", () => {
    const postId = new URLSearchParams(window.location.search).get("id");
    const container = document.getElementById("post-container");
  
    if (!postId) {
      container.innerHTML = "<p>Post not found.</p>";
      return;
    }
  
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const post = posts.find(p => p.id == postId);
  
    if (!post) {
      container.innerHTML = "<p>Post not found.</p>";
      return;
    }
  
    container.innerHTML = `
      <div class="post-card">
        <input id="edit-title" value="${post.title}" />
        <textarea id="edit-content" rows="10">${post.content}</textarea>
        ${post.image ? `<img src="${post.image}" alt="Post Image" style="max-width:100%"/>` : ""}
        <p><em>Created on: ${post.timestamp}</em></p>
        <button id="save-btn">Save Changes</button>
        <button id="delete-btn" style="background-color: crimson; color: white; margin-top: 1rem;">Delete Post</button>
      </div>
    `;
  
    document.getElementById("save-btn").addEventListener("click", () => {
      post.title = document.getElementById("edit-title").value;
      post.content = document.getElementById("edit-content").value;
  
      const index = posts.findIndex(p => p.id == postId);
      posts[index] = post;
  
      localStorage.setItem("posts", JSON.stringify(posts));
      alert("Post updated!");
      window.location.href = "index.html";
    });
    
    document.getElementById("delete-btn").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this post?")) {
          const updatedPosts = posts.filter(p => p.id != postId);
          localStorage.setItem("posts", JSON.stringify(updatedPosts));
          alert("Post deleted.");
          window.location.href = "index.html";
        }
      });
      
  });
  