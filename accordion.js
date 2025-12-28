window.addEventListener("load", function() {
    for (const el of this.document.querySelectorAll(".accordion")) {
        let closed = false;
        function toggle() {
            for (const content of el.querySelectorAll(".acc-content")) {
                if (closed) {
                    content.classList.add("acc-show");
                    content.style.height = content.scrollHeight + "px";
                }
                else {
                    content.classList.remove("acc-show");
                    content.style.height = 0;
                }
            }
            closed = !closed;
        }
        for (const title of el.querySelectorAll(".acc-title")) {
            title.addEventListener("click", toggle);
        }
        toggle();
    }
});