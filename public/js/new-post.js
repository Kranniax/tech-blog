var newPostHandler = async function (event) {
  event.preventDefault();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  const response = await fetch("/api/posts/", {
    method: "post",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  }
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newPostHandler);
