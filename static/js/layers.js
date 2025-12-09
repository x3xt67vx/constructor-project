function refreshLayersPanel() {
    if (!layersList) return;

    layersList.innerHTML = "";

    const blocks = Array.from(document.querySelectorAll(".component"))
        .sort((a, b) => (parseInt(a.style.zIndex || 0) - parseInt(b.style.zIndex || 0)));
    const counters = {};

    blocks.forEach(block => {
        const li = document.createElement("li");
        const name = block.dataset.type || "block";
        counters[name] = (counters[name] || 0) + 1;

        li.textContent = `${name} #${counters[name]} (z: ${block.style.zIndex || 0})`;

        li.dataset.id = block.dataset.id;
        li.draggable = true;

        if (selectedComponent && selectedComponent.dataset.id === block.dataset.id) {
            li.classList.add("active");
        }

        li.addEventListener("click", () => {
            selectComponent(block);
            refreshLayersPanel();
        });

        layersList.appendChild(li);
    });
}


function shiftLayer(direction) {
    if (!selectedComponent) return;

    const z = parseInt(selectedComponent.style.zIndex || 0);
    selectedComponent.style.zIndex = z + direction;

    refreshLayersPanel();
}


function applyNewZIndexes() {
    const items = Array.from(layersList.querySelectorAll("li"));

    items.forEach((li, index) => {
        const id = li.dataset.id;
        const block = document.querySelector(`.component[data-id="${id}"]`);
        block.style.zIndex = index;
    });

    refreshLayersPanel();
}

function getDragAfterElement(container, y) {
    const items = [...container.querySelectorAll("li:not(.dragging)")];

    return items.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}


btnLayerUp.addEventListener("click", () => shiftLayer(+1));
btnLayerDown.addEventListener("click", () => shiftLayer(-1));

btnLayerTop.addEventListener("click", () => {
    if (!selectedComponent) return;

    const maxZ = Math.max(
        ...Array.from(document.querySelectorAll(".component")).map(x => parseInt(x.style.zIndex || 0))
    );

    selectedComponent.style.zIndex = maxZ + 1;


    refreshLayersPanel();
});

btnLayerBottom.addEventListener("click", () => {
    if (!selectedComponent) return;

    const minZ = Math.min(
        ...Array.from(document.querySelectorAll(".component")).map(x => parseInt(x.style.zIndex || 0))
    );

    selectedComponent.style.zIndex = minZ - 1;

    refreshLayersPanel();
});