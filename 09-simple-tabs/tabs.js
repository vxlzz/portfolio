// Wait for content to be loaded before we load the script
addEventListener("DOMContentLoaded", (event) => {

    // Select every tab, and tab content
    const tabs = document.querySelectorAll(".tab");
    const contentAll = document.querySelectorAll(".tab-content")

    // Loop over each tab
    tabs.forEach((tab, i) => {

        // Add a click event to each tab button, and remove the .active class
        tab.addEventListener("click", (event) => {
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });

            // Add the .active class to the current tab
            tab.classList.add("active");

            // Remove the .active class from all tab content
            contentAll.forEach((content) => {
                content.classList.remove("active");
            });
            
            // Add the .active class to the current tab content
            contentAll[i].classList.add("active");
        });
    });
});