document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const contentTabs = document.querySelectorAll(".content-tab");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function() {
            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove("active"));
            contentTabs.forEach(c => c.classList.remove("active"));

            // Add active class to the clicked tab and corresponding content
            tab.classList.add("active");
            contentTabs[index].classList.add("active");
        });
    });
});
