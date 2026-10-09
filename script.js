
document.addEventListener("DOMContentLoaded", function () {

    // Display the current year in the footer
    const yearElements = document.querySelectorAll(".year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

    // Highlight the current page in the navigation
    const currentPage = window.location.pathname.split("/").pop()
        || "index.html";

    document.querySelectorAll(".navbar nav a").forEach(function (link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

});
