let selectedComponent = null;
const canvas = document.getElementById("canvas");

async function loadLayout() {
    const res = await fetch("/api/layouts/1");
    const layout = await res.json();
    const canvas = document.getElementById("canvas");

    layout.components.forEach(comp => addComponentToCanvas(comp, canvas));

    if (comp.style.background_image) {
        div.style.backgroundImage = `url(${comp.style.background_image})`;
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center";
    }

    if (layout.canvas_background) {
        canvas.style.backgroundImage = `url(${layout.canvas_background})`;
        canvas.style.backgroundSize = "cover";
        canvas.style.backgroundPosition = "center";
    }
}

function addComponentToCanvas(comp, canvas) {
    const div = document.createElement("div");
    div.classList.add("component");
    div.dataset.id = comp.id;
    div.dataset.type = comp.type;
    div.style.left = comp.position.x + "px";
    div.style.top = comp.position.y + "px";
    div.style.width = comp.size.width + "px";
    div.style.height = comp.size.height + "px";
    div.style.zIndex = comp.z_index;
    div.style.background = comp.style.background_color || "#fff";
    div.style.color = comp.style.color || "#000";
    div.style.fontSize = comp.style.font_size || "14px";

    if (comp.style.background_image) {
        div.style.backgroundImage = `url(${comp.style.background_image})`;
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center";
    }

    if (comp.type === "image") {
        const img = document.createElement("img");
        img.src = comp.content.image_url || "";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        div.appendChild(img);
    } else {
        div.innerText = comp.content.text || "";
    }


    makeDraggable(div);
    canvas.appendChild(div);

    div.addEventListener("click", () => selectComponent(div));


}


function selectComponent(el) {
    if (selectedComponent) selectedComponent.style.border = "1px solid #ccc";
    selectedComponent = el;
    el.style.border = "2px solid blue";
    updateStyleEditor(el);
}


function updateStyleEditor(el) {
    document.getElementById("edit-text").value = el.innerText || "";
    document.getElementById("edit-bg").value = rgbToHex(el.style.backgroundColor || "#ffffff");
    document.getElementById("edit-color").value = rgbToHex(el.style.color || "#000000");
    document.getElementById("edit-font").value = parseInt(el.style.fontSize) || 14;
    document.getElementById("edit-width").value = parseInt(el.style.width) || 100;
    document.getElementById("edit-height").value = parseInt(el.style.height) || 50;
    document.getElementById("edit-image").value = el.dataset.type === "image" && el.querySelector("img") ? el.querySelector("img").src : "";
    document.getElementById("edit-bg-image").value = el.style.backgroundImage ? el.style.backgroundImage.slice(5, -2) : "";
}



document.getElementById("edit-text").addEventListener("input", e => {if (selectedComponent) selectedComponent.innerText = e.target.value;});
document.getElementById("edit-bg").addEventListener("input", e => {if (selectedComponent) selectedComponent.style.backgroundColor = e.target.value;});
document.getElementById("edit-color").addEventListener("input", e => {if (selectedComponent) selectedComponent.style.color = e.target.value;});
document.getElementById("edit-font").addEventListener("input", e => {if (selectedComponent) selectedComponent.style.fontSize = e.target.value + "px";});
document.getElementById("edit-width").addEventListener("input", e => {if (selectedComponent) selectedComponent.style.width = e.target.value + "px";});
document.getElementById("edit-height").addEventListener("input", e => {if (selectedComponent) selectedComponent.style.height = e.target.value + "px";});
document.getElementById("edit-image").addEventListener("input", e => {
    if (selectedComponent && selectedComponent.dataset.type === "image") {
        let img = selectedComponent.querySelector("img");
        if (!img) {
            img = document.createElement("img");
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            selectedComponent.appendChild(img);
        }
        img.src = e.target.value;
    }
});

document.getElementById("canvas-bg-url").addEventListener("input", e => {
    canvas.style.backgroundImage = `url(${e.target.value})`;
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundPosition = "center";
});

document.getElementById("clear-canvas-bg").addEventListener("click", () => {
    canvas.style.backgroundImage = "";
    document.getElementById("canvas-bg-url").value = "";
});

document.getElementById("edit-bg-image").addEventListener("input", e => {
    if (selectedComponent) {
        selectedComponent.style.backgroundImage = `url(${e.target.value})`;
        selectedComponent.style.backgroundSize = "cover";
        selectedComponent.style.backgroundPosition = "center";
    }
});

document.getElementById("clear-bg-image").addEventListener("click", () => {
    if (selectedComponent) {
        selectedComponent.style.backgroundImage = "";
        document.getElementById("edit-bg-image").value = "";
    }
});
document.getElementById("delete-block").addEventListener("click", () => {
    if (selectedComponent) {
        selectedComponent.remove();
        selectedComponent = null;
        // очистка панели стилей
        document.getElementById("edit-text").value = "";
        document.getElementById("edit-bg").value = "#ffffff";
        document.getElementById("edit-color").value = "#000000";
        document.getElementById("edit-font").value = 14;
        document.getElementById("edit-width").value = 100;
        document.getElementById("edit-height").value = 50;
        document.getElementById("edit-image").value = "";
        document.getElementById("edit-bg-image").value = "";
    }
});


// drag & drop для панели
document.querySelectorAll(".template-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const canvas = document.getElementById("canvas");
        const type = btn.getAttribute("data-type");
        const comp = {
            id: Date.now(),
            type: type,
            position: { x: 50, y: 50 },
            size: { width: 200, height: 50 },
            z_index: 1,
            content: { text: type.toUpperCase() },
            style: { background_color: "#fff", color: "#000", font_size: "16px" }
        };
        addComponentToCanvas(comp, canvas);
    });
});
document.querySelectorAll(".template-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const canvas = document.getElementById("canvas");
        const type = btn.getAttribute("data-type");
        const comp = {
            id: Date.now(),
            type: type,
            position: { x: 50, y: 50 },
            size: { width: 200, height: 150 },
            z_index: 1,
            content: type === "image" ? { image_url: "https://via.placeholder.com/200x150" } : { text: type.toUpperCase() },
            style: { background_color: "#fff", color: "#000", font_size: "16px" }
        };
        addComponentToCanvas(comp, canvas);
    });
});
document.querySelectorAll(".template-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const canvas = document.getElementById("canvas");
        const type = btn.getAttribute("data-type");
        const comp = {
            id: Date.now(),
            type: type,
            position: { x: 50, y: 50 },
            size: { width: 200, height: 150 },
            z_index: 1,
            content: type === "image" ? { image_url: "https://via.placeholder.com/200x150" } : { text: type.toUpperCase() },
            style: { background_color: "#fff", color: "#000", font_size: "16px" }
        };
        addComponentToCanvas(comp, canvas);
    });
});



function makeDraggable(el) {
    let isDragging = false, offsetX, offsetY;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        el.style.left = (e.pageX - offsetX) + 'px';
        el.style.top = (e.pageY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}
document.getElementById("save-layout").addEventListener("click", saveLayout);

function saveLayout() {
    const canvas = document.getElementById("canvas");
    const comps = [];

    canvas.querySelectorAll(".component").forEach((el, index) => {
        let content = {};
        if (el.dataset.type === "image") {
            const img = el.querySelector("img");
            content.image_url = img ? img.src : "";
        } else {
            content.text = el.innerText;
        }

        comps.push({
            id: el.dataset.id || Date.now() + index,
            type: el.dataset.type || "text",
            position: {
                x: parseInt(el.style.left),
                y: parseInt(el.style.top)
            },
            size: {
                width: el.offsetWidth,
                height: el.offsetHeight
            },
            z_index: parseInt(el.style.zIndex) || 1,
            content: content,
            style: {
                background_color: document.getElementById("edit-bg").value || "#fff",
                color: document.getElementById("edit-color").value || "#000",
                font_size: document.getElementById("edit-font").value + "px" || "16px",
                background_image: document.getElementById("edit-bg-image").value || ""
            }
        });
    });

    const layout = {
        id: 1,
        name: "First Layout",
        components: comps,
        canvas_background: getBackgroundImageUrl(canvas)
    };

    fetch("/api/layouts/1/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(layout)
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "ok") alert("Макет сохранён!");
            else alert("Ошибка сохранения");
        })
        .catch(err => alert("Ошибка: " + err));
}


function rgbToHex(rgb) {
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
    return result ? "#" + ((1 << 24) + (parseInt(result[1]) << 16) + (parseInt(result[2]) << 8) + parseInt(result[3])).toString(16).slice(1) : rgb;
}
function getBackgroundImageUrl(el) {
    const bg = el.style.backgroundImage;
    if (!bg || bg === "none") return "";
    // убираем url("...") или url('...')
    const match = bg.match(/url\(["']?(.*?)["']?\)/);
    return match ? match[1] : "";
}
function removeBlock() {
    if (!selected) {
        alert("Выберите блок для удаления");
        return;
    }
    selected.remove();
    selected = null;
}
function removeBlockBackground() {
    if (!selected) {
        alert("Сначала выберите блок");
        return;
    }
    selected.style.backgroundImage = "";
    document.getElementById("edit-bg-image").value = "";
}
function removeCanvasBackground() {
    const canvas = document.getElementById("canvas");
    canvas.style.backgroundImage = "";
    document.getElementById("canvas-bg-url").value = "";
}
document.addEventListener("keydown", (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
        if (selectedBlockId) {
            deleteSelectedBlock();
        }
    }
});

function deleteSelectedBlock() {
    const blockEl = document.querySelector(`[data-id="${selectedBlockId}"]`);
    if (!blockEl) return;

    blockEl.remove(); // удаляем с экрана

    // обновляем локальный массив блоков
    blocks = blocks.filter(b => b.id !== selectedBlockId);

    selectedBlockId = null;
    updateBlockStyleEditor(null);

    saveLayout();
}

loadLayout();