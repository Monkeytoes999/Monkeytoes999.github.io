function addDemo() {
    // Base creation
    var base = document.createElement("div");
    base.classList.add("widget");

    var text = document.createElement("p");
    text.innerHTML = "Demonstration";
    base.appendChild(text);

    // Return base
    return base;
}