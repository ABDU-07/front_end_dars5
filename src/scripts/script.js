const closeBtn = document.getElementById("close-nav"),
    open = document.getElementById("open-nav"),
    nav = document.getElementById("nav");

window.addEventListener("click", (e) => {
    if (e.target.id == "close-nav") {
        nav.classList.add("max-lg:hidden");
    }
    if (e.target.id == "open-nav") {
        nav.classList.remove("max-lg:hidden");
    }
});

const darkBtn = document.getElementById("dark");
darkBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
});
