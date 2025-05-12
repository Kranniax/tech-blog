var editPostHandler = async function (event) {
  event.preventDefault();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();
  try {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    document.location.replace("/dashboard");
  } catch (error) {
    console.error(error.message);
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editPostHandler);
