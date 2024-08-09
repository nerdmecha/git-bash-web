const divTags = document.querySelectorAll(".obj > div");

divTags.forEach((div) => {
    div.addEventListener("mouseover", () => {
        const subdiv = div.querySelector(".subdiv");
        subdiv.style.display = "block";
    })

    div.addEventListener("mouseout", () => {
        const subdiv = div.querySelector(".subdiv");
        subdiv.style.display = "none";
    })
})