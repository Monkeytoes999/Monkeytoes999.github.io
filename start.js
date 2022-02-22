function refresh() {
    var base = document.getElementById("widgets");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].build();
        widgets[i].initialize();
        widgets[i].setPos(positions[i][0], positions[i][1]);
        base.appendChild(widgets[i].base);
    }
}
function updateAll() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].update();
    }
}
async function tick() {
    for (let i = 0; i < widgets.length; i++) {
        widgets[i].fixMotion();
    }
    setTimeout(() => {
        tick();
    }, 10);
}
for (let i = 0; i < types.length; i++) {
    widgets.push(creators[types[i]]());
}
refresh();
updateAll();
tick();