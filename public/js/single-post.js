function createPost(event) {
  event.preventDefault();
  const comment = document.querySelector("#comment-text-area").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment) {
    // post request to create a comment.
    fetch("/api/comments/", {
      method: "post",
      body: JSON.stringify({
        comment,
        post_id,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok){
            // reload page after successful creation.
            location.reload();
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Fetch error:", error);
      });
  }
}

document.querySelector("#comment-form").addEventListener("submit", createPost);
