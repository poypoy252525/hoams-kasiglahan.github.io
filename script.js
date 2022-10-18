const items = document.querySelectorAll(".collapsible");
items.forEach(item => {
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible__expanded");
    });
});