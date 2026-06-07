document.addEventListener("DOMContentLoaded", function() {
    const post = document.querySelector(".blog-post");
    window.scrollTo(0, 0); // Scroll to top when page loads

    // Add the 'visible' class after a slight delay to trigger fade-in effect
    setTimeout(() => {
        post.classList.add("visible");
    }, 300);
});
