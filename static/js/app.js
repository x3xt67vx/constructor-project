
// document.getElementById("align-left").onclick = () => {
//     if (!selectedComponent) return;
//     selectedComponent.style.left = "0px";
// };
//
// document.getElementById("align-center").onclick = () => {
//     if (!selectedComponent) return;
//     const parentWidth = canvas.offsetWidth;
//     const compWidth = selectedComponent.offsetWidth;
//     selectedComponent.style.left = ((parentWidth - compWidth) / 2) + "px";
// };
//
// document.getElementById("align-top").onclick = () => {
//     if (!selectedComponent) return;
//     selectedComponent.style.top = "0px";
// };

document.body.classList.add("dark-theme");
canvas.classList.add("light");


document.getElementById("edit-text").addEventListener("input", e => {
    if (selectedComponent && selectedComponent.dataset.type !== "image") selectedComponent.innerText = e.target.value;});

document.getElementById("edit-bg").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.backgroundColor = e.target.value;});

document.getElementById("edit-color").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.color = e.target.value;});

document.getElementById("edit-font").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.fontSize = e.target.value + "px";});

document.getElementById("edit-width").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.width = e.target.value + "px";});

document.getElementById("edit-height").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.height = e.target.value + "px";});


//Image
document.getElementById("edit-image").addEventListener("input", e => {
    if (!selectedComponent) return;
    if (selectedComponent.dataset.type === "image") {
        let img = selectedComponent.querySelector("img");
        if (!img) {
            img = document.createElement("img");
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            selectedComponent.appendChild(img);
        }
        img.src = e.target.value || DEFAULT_IMG;
    }
});
document.getElementById("edit-bg-image").addEventListener("input", e => {
    if (!selectedComponent) return;
    if (!e.target.value) {
        selectedComponent.style.backgroundImage = "";
    } else {
        selectedComponent.style.backgroundImage = `url(${e.target.value})`;
        selectedComponent.style.backgroundSize = "cover";
        selectedComponent.style.backgroundPosition = "center";
    }
});
document.getElementById("clear-bg-image").addEventListener("click", () => {
    if (!selectedComponent) return;
    selectedComponent.style.backgroundImage = "";
    document.getElementById("edit-bg-image").value = "";
});

document.getElementById("border-radius-text").addEventListener("input", e => {
    if (!selectedComponent) return;
    const val = e.target.value + "px";
    if (selectedComponent.dataset.type === "image") {
        const img = selectedComponent.querySelector("img");
        if (img) img.style.borderRadius = val;
        else selectedComponent.style.borderRadius = val;
    } else {
        selectedComponent.style.borderRadius = val;
    }
});

//Canvas
document.getElementById("canvas-bg-url").addEventListener("input", e => {
    canvas.style.backgroundImage = e.target.value ? `url(${e.target.value})` : "";
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundPosition = "center";
});
document.getElementById("clear-canvas-bg").addEventListener("click", () => {
    canvas.style.backgroundImage = "";
    document.getElementById("canvas-bg-url").value = "";
});

function deleteSelectedComponent() {
    if (!selectedComponent) return;
    // remove
    selectedComponent.remove();
    selectedComponent = null;
    updateStyleEditorValuesToDefaults();
    hideAllControls();
}
document.getElementById("delete-block").addEventListener("click", deleteSelectedComponent);

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "d") {
        e.preventDefault();
        if (!selectedComponent) return;

        const clone = selectedComponent.cloneNode(true);
        clone.dataset.id = Date.now() + Math.floor(Math.random() * 999);
        clone.style.left = (parseInt(selectedComponent.style.left) + 20) + "px";
        clone.style.top = (parseInt(selectedComponent.style.top) + 20) + "px";
        clone.style.zIndex = ++maxZIndex;

        makeDraggable(clone);
        clone.addEventListener("click", (ev) => { ev.stopPropagation(); selectComponent(clone); });

        canvas.appendChild(clone);
        refreshLayersPanel();
    }
});


document.addEventListener("keydown", (e) => {
    if ((e.key === "Delete" || e.key === "Backspace") && selectedComponent) {
        deleteSelectedComponent();
    }
});

//Template
document.getElementById("choose-template-btn").addEventListener("click", () => {
    document.getElementById("template-selector").style.display = "block";
});
document.getElementById("close-template-selector").addEventListener("click", () => {
    document.getElementById("template-selector").style.display = "none";
});
document.querySelectorAll(".select-template").forEach(btn => {
    btn.addEventListener("click", () => {
        addTemplate(btn.dataset.tpl);
        document.getElementById("template-selector").style.display = "none";
    });
});


document.querySelectorAll(".template-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        if (TEMPLATES[type]) {
            addTemplate(type);
        } else {
            const comp = {
                id: Date.now(),
                type: type,
                position: { x: 50, y: 50 },
                size: { width: 200, height: type === "image" ? 150 : 50 },
                z_index: ++maxZIndex,
                content: type === "image" ? { image_url: DEFAULT_IMG } : { text: type.toUpperCase() },
                style: { background_color: "#fff", color: "#000", font_size: "16px", background_image: "", border_radius: "0px" }
            };
            addComponentToCanvas(comp, canvas);
        }
    });
});

function updateThemeUI() {
    if (!toggleCanvasBtn) return;

    if (canvasTheme === "light") {
        toggleCanvasBtn.innerText = "🌙 Тёмное полотно";
    } else {
        toggleCanvasBtn.innerText = "☀ Светлое полотно";
    }
}

toggleCanvasBtn.addEventListener("click", () => {
    canvasTheme = canvasTheme === "light" ? "dark" : "light";

    canvas.classList.remove("light", "dark");
    canvas.classList.add(canvasTheme);

    canvas.style.backgroundImage = "";
    document.getElementById("canvas-bg-url").value = "";

    updateThemeUI();
});

document.getElementById("save-layout").addEventListener("click", saveLayout);

document.getElementById("edit-x").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.left = parseInt(e.target.value) + "px";
});
document.getElementById("edit-y").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.top = parseInt(e.target.value) + "px";
});

function addTemplate(templateName) {
    const template = TEMPLATES[templateName];
    if (!template) return;

    template.components.forEach(comp => {
        const newComp = JSON.parse(JSON.stringify(comp));
        newComp.id = Date.now() + Math.floor(Math.random() * 1000); // unique id
        if (!newComp.style) newComp.style = {};
        if (!newComp.style.border_radius) newComp.style.border_radius = "0px";
        addComponentToCanvas(newComp, canvas);
    });
}

layersList.addEventListener("dragstart", (e) => {
    if (e.target.tagName !== "LI") return;

    dragSrcEl = e.target;
    e.target.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
});

layersList.addEventListener("dragend", (e) => {
    if (e.target.tagName !== "LI") return;

    e.target.classList.remove("dragging");
    refreshLayersPanel();
});

layersList.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(layersList, e.clientY);

    const dragging = layersList.querySelector(".dragging");

    if (!afterElement) {
        layersList.appendChild(dragging);
    } else {
        layersList.insertBefore(dragging, afterElement);
    }
});

layersList.addEventListener("dragenter", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.add("drag-over");
    }
});

layersList.addEventListener("dragleave", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.remove("drag-over");
    }
});

layersList.addEventListener("drop", (e) => {
    e.preventDefault();

    Array.from(layersList.querySelectorAll("li")).forEach(li =>
        li.classList.remove("drag-over")
    );

    applyNewZIndexes();
});




updateThemeUI();
loadLayout();
hideAllControls();
setTimeout(updatePreview, 500);
setInterval(refreshLayersPanel, 500);

