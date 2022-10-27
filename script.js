const items = document.getElementsByClassName("collapsible");
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener("click", function() {
        item.classList.toggle("collapsible__expanded");
    });
}