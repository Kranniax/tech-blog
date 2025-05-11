var deletePostHandler = async function (event) {
  event.preventDefault();

  
  const deletePrompt = confirm("Are you sure you want to delete this post?");
  // Get the post ID from the form's data attribute
  const postId = event.currentTarget.getAttribute("data-post-id");

  if (deletePrompt) {
    const response = await fetch(`/api/posts/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Post deleted successfully!");
      location.reload(); // Reload the page to reflect changes
    } else {
      alert("Failed to delete the post.");
    }
  }
};

document.querySelectorAll(".delete-form").forEach((form) => {
  form.addEventListener("submit", deletePostHandler);
});
