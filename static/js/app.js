const DEFAULT_IMG = "/static/images/default_img.jpg";

const TEMPLATES = {
    profile: {
        components: [
            {
                id: Date.now() + 1,
                type: "image",
                position: { x: 50, y: 20 },
                size: { width: 100, height: 100 },
                z_index: 1,
                content: { image_url: "https://i.pinimg.com/736x/f2/07/0c/f2070ca40e6b6106386849db1044c9d0.jpg" },
                style: { background_color: "#fff", color: "#000", font_size: "14px", background_image: "" }
            },
            {
                id: Date.now() + 2,
                type: "text",
                position: { x: 160, y: 30 },
                size: { width: 200, height: 30 },
                z_index: 1,
                content: { text: "Имя Фамилия" },
                style: { background_color: "#fff", color: "#333", font_size: "18px", background_image: "" }
            },
            {
                id: Date.now() + 3,
                type: "text",
                position: { x: 160, y: 70 },
                size: { width: 200, height: 25 },
                z_index: 1,
                content: { text: "Должность" },
                style: { background_color: "#fff", color: "#666", font_size: "14px", background_image: "" }
            },
            {
                id: Date.now() + 4,
                type: "text",
                position: { x: 160, y: 100 },
                size: { width: 200, height: 40 },
                z_index: 1,
                content: { text: "GitHub: https://github.com/username" },
                style: { background_color: "#fff", color: "#1a0dab", font_size: "14px", background_image: "" }
            }
        ]
    }
};
TEMPLATES.skills = {
    components: [
        {
            id: Date.now() + 101,
            type: "text",
            position: { x: 50, y: 200 },
            size: { width: 150, height: 40 },
            z_index: 1,
            content: { text: "JavaScript" },
            style: {
                background_color: "#fefefe",
                color: "#333",
                font_size: "18px",
                background_image: ""
            }
        },
        {
            id: Date.now() + 102,
            type: "text",
            position: { x: 220, y: 200 },
            size: { width: 150, height: 40 },
            z_index: 1,
            content: { text: "Python" },
            style: {
                background_color: "#fefefe",
                color: "#333",
                font_size: "18px",
                background_image: ""
            }
        },
        {
            id: Date.now() + 103,
            type: "text",
            position: { x: 50, y: 260 },
            size: { width: 150, height: 40 },
            z_index: 1,
            content: { text: "Go" },
            style: {
                background_color: "#fefefe",
                color: "#333",
                font_size: "18px",
                background_image: ""
            }
        },
        {
            id: Date.now() + 104,
            type: "text",
            position: { x: 220, y: 260 },
            size: { width: 150, height: 40 },
            z_index: 1,
            content: { text: "Docker" },
            style: {
                background_color: "#fefefe",
                color: "#333",
                font_size: "18px",
                background_image: ""
            }
        }
    ]
};
TEMPLATES.contacts = {
    components: [
        {
            id: Date.now() + 201,
            type: "text",
            position: { x: 50, y: 350 },
            size: { width: 400, height: 30 },
            z_index: 1,
            content: { text: "GitHub: https://github.com/username" },
            style: { background_color: "#ffffff", color: "#000", font_size: "16px" }
        },
        {
            id: Date.now() + 202,
            type: "text",
            position: { x: 50, y: 390 },
            size: { width: 400, height: 30 },
            z_index: 1,
            content: { text: "Discord: user#1234" },
            style: { background_color: "#ffffff", color: "#5865F2", font_size: "16px" }
        },
        {
            id: Date.now() + 203,
            type: "text",
            position: { x: 50, y: 430 },
            size: { width: 400, height: 30 },
            z_index: 1,
            content: { text: "Reddit: u/username" },
            style: { background_color: "#ffffff", color: "#FF4500", font_size: "16px" }
        }
    ]
};
TEMPLATES.project = {
    components: [
        {
            id: Date.now() + 301,
            type: "text",
            position: { x: 50, y: 500 },
            size: { width: 300, height: 30 },
            z_index: 1,
            content: { text: "Project Name" },
            style: { font_size: "20px", color: "#000" }
        },
        {
            id: Date.now() + 302,
            type: "text",
            position: { x: 50, y: 540 },
            size: { width: 300, height: 60 },
            z_index: 1,
            content: { text: "Short description of the project..." },
            style: { font_size: "14px", color: "#444" }
        },
        {
            id: Date.now() + 303,
            type: "text",
            position: { x: 50, y: 610 },
            size: { width: 300, height: 30 },
            z_index: 1,
            content: { text: "GitHub → https://github.com/..." },
            style: { font_size: "14px", color: "#1a0dab" }
        }
    ]
};
TEMPLATES.devcard = {
    components: [
        {
            id: Date.now() + 10,
            type: "text",
            position: { x: 40, y: 40 },
            size: { width: 280, height: 40 },
            z_index: 1,
            content: { text: "Developer Card" },
            style: { background_color: "#fff", color: "#111", font_size: "26px", background_image: "" }
        },
        {
            id: Date.now() + 11,
            type: "text",
            position: { x: 40, y: 90 },
            size: { width: 280, height: 30 },
            z_index: 1,
            content: { text: "GitHub: https://github.com/username" },
            style: { background_color: "#fff", color: "#0366d6", font_size: "16px", background_image: "" }
        },
        {
            id: Date.now() + 12,
            type: "text",
            position: { x: 40, y: 130 },
            size: { width: 280, height: 30 },
            z_index: 1,
            content: { text: "Discord: username#0000" },
            style: { background_color: "#fff", color: "#5865F2", font_size: "16px", background_image: "" }
        }
    ]
};

TEMPLATES.business = {
    components: [
        {
            id: Date.now() + 20,
            type: "text",
            position: { x: 50, y: 50 },
            size: { width: 300, height: 40 },
            z_index: 1,
            content: { text: "Company Name" },
            style: { background_color: "#fff", color: "#000", font_size: "28px", background_image: "" }
        },
        {
            id: Date.now() + 21,
            type: "text",
            position: { x: 50, y: 100 },
            size: { width: 300, height: 25 },
            z_index: 1,
            content: { text: "CEO: Имя Фамилия" },
            style: { background_color: "#fff", color: "#444", font_size: "16px", background_image: "" }
        },
        {
            id: Date.now() + 22,
            type: "text",
            position: { x: 50, y: 140 },
            size: { width: 300, height: 25 },
            z_index: 1,
            content: { text: "Email: example@mail.com" },
            style: { background_color: "#fff", color: "#1a0dab", font_size: "16px", background_image: "" }
        }
    ]
};




let selectedComponent = null;
let maxZIndex = 1;
let dragSrcEl = null;
let selectionBox = null;
let startX = 0, startY = 0;
let canvasTheme = "light";
let selectedComponents = [];





const canvas = document.getElementById("canvas");
const layersList = document.getElementById("layers-list");
const btnLayerUp = document.getElementById("layer-up");
const btnLayerDown = document.getElementById("layer-down");
const btnLayerTop = document.getElementById("layer-top");
const btnLayerBottom = document.getElementById("layer-bottom");
const toggleCanvasBtn = document.getElementById("toggle-canvas-theme");



const CONTROLS = {
    editImage: document.getElementById("edit-image"),
    editBgImage: document.getElementById("edit-bg-image"),
    clearBgImageBtn: document.getElementById("clear-bg-image"),
    editText: document.getElementById("edit-text"),
    editBg: document.getElementById("edit-bg"),
    editColor: document.getElementById("edit-color"),
    editFont: document.getElementById("edit-font"),
    editWidth: document.getElementById("edit-width"),
    editHeight: document.getElementById("edit-height"),
    borderRadius: document.getElementById("border-radius-text")
};
document.body.classList.add("dark-theme");


function hideControl(el) {
    if (!el) return;
    if (el.parentElement && el.parentElement.tagName === "LABEL") el.parentElement.style.display = "none";
    else el.style.display = "none";
}
function showControl(el) {
    if (!el) return;
    if (el.parentElement && el.parentElement.tagName === "LABEL") el.parentElement.style.display = "";
    else el.style.display = "";
}

function hideAllControls() {
    Object.values(CONTROLS).forEach(c => { if (c) hideControl(c); });
    if (CONTROLS.clearBgImageBtn) CONTROLS.clearBgImageBtn.style.display = "none";
}

function showControlsFor(type) {
    hideAllControls();
    if (type === "text") {
        showControl(CONTROLS.editText);
        showControl(CONTROLS.editBg);
        showControl(CONTROLS.editColor);
        showControl(CONTROLS.editFont);
        showControl(CONTROLS.editWidth);
        showControl(CONTROLS.editHeight);
        showControl(CONTROLS.borderRadius);
    } else if (type === "image") {
        showControl(CONTROLS.editImage);
        showControl(CONTROLS.editWidth);
        showControl(CONTROLS.editHeight);
        showControl(CONTROLS.borderRadius);
    } else {
        showControl(CONTROLS.editBg);
        showControl(CONTROLS.editWidth);
        showControl(CONTROLS.editHeight);
        showControl(CONTROLS.borderRadius);
    }
}


async function loadLayout() {
    try {
        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");
        const res = await  fetch(`/api/layouts/get?id=${id}`);
        if (!res.ok) throw new Error("no layout");
        const layout = await res.json();

        if (layout.components) {
            layout.components.forEach(comp => addComponentToCanvas(comp, canvas));
        }

        if (layout.canvas_background) {
            canvas.style.backgroundImage = `url(${layout.canvas_background})`;
            canvas.style.backgroundSize = "cover";
            canvas.style.backgroundPosition = "center";
            document.getElementById("canvas-bg-url").value = layout.canvas_background;
        }
    } catch (e) {
        console.log("loadLayout:", e.message);
    }
}

function addComponentToCanvas(comp, canvasEl) {
    const div = document.createElement("div");
    div.classList.add("component");
    div.dataset.id = comp.id;
    div.dataset.type = comp.type;
    div.style.left = (comp.position?.x ?? 50) + "px";
    div.style.top = (comp.position?.y ?? 50) + "px";
    div.style.width = (comp.size?.width ?? 100) + "px";
    div.style.height = (comp.size?.height ?? 50) + "px";
    div.style.zIndex = comp.z_index ?? (++maxZIndex);
    div.style.background = comp.style?.background_color || "";
    div.style.color = comp.style?.color || "";
    div.style.fontSize = comp.style?.font_size || "";

    if (comp.style && comp.style.border_radius) {
        div.style.borderRadius = comp.style.border_radius;
    }

    if (comp.style && comp.style.background_image) {
        div.style.backgroundImage = `url(${comp.style.background_image})`;
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center";
    }

    if (comp.type === "image") {
        const img = document.createElement("img");
        img.src = comp.content?.image_url || DEFAULT_IMG;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        if (comp.style && comp.style.border_radius) img.style.borderRadius = comp.style.border_radius;
        div.appendChild(img);
    } else if (comp.type === "link") {
        const a = document.createElement("a");
        a.href = comp.content?.url || "#";
        a.target = "_blank";
        a.innerText = comp.content?.text || "Ссылка";
        div.appendChild(a);
    } else {
        div.innerText = comp.content?.text || "";
    }

    makeDraggable(div);
    canvasEl.appendChild(div);

    div.addEventListener("click", (ev) => {
        ev.stopPropagation();
        selectComponent(div);
    });
}

function selectComponent(el) {
    if (!el) return;
    if (selectedComponent) {
        selectedComponent.style.border = "1px solid #ccc";
    }
    selectedComponent = el;
    el.style.border = "2px solid blue";

    const type = el.dataset.type || "other";
    showControlsFor(type);

    updateStyleEditor(el);
}

canvas.addEventListener("click", () => {
    if (selectedComponent) {
        selectedComponent.style.border = "1px solid #ccc";
        selectedComponent = null;
    }
    hideAllControls();
});


function updateStyleEditor(el) {
    if (!el) return;

    const editText = document.getElementById("edit-text");
    editText.value = el.innerText || "";

    document.getElementById("edit-bg").value = rgbToHex(el.style.backgroundColor || window.getComputedStyle(el).backgroundColor || "#ffffff");
    document.getElementById("edit-color").value = rgbToHex(el.style.color || window.getComputedStyle(el).color || "#000000");

    const fs = el.style.fontSize || window.getComputedStyle(el).fontSize || "14px";

    document.getElementById("edit-font").value = parseInt(fs);
    document.getElementById("edit-width").value = parseInt(el.style.width) || el.offsetWidth || 100;
    document.getElementById("edit-height").value = parseInt(el.style.height) || el.offsetHeight || 50;

    if (el.dataset.type === "image") {
        const img = el.querySelector("img");
        document.getElementById("edit-image").value = img ? img.src : "";
    } else {
        document.getElementById("edit-image").value = "";
    }

    const bgImg = el.style.backgroundImage ? el.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '') : "";
    document.getElementById("edit-bg-image").value = bgImg;

    let br = "0";
    if (el.dataset.type === "image") {
        const img = el.querySelector("img");
        if (img && img.style.borderRadius) br = parseInt(img.style.borderRadius) || 0;
        else if (el.style.borderRadius) br = parseInt(el.style.borderRadius) || 0;
    } else {
        br = parseInt(el.style.borderRadius) || 0;
    }
    document.getElementById("border-radius-text").value = br;
    document.getElementById("edit-x").value = parseInt(el.style.left) || 0;
    document.getElementById("edit-y").value = parseInt(el.style.top) || 0;

}

document.getElementById("align-left").onclick = () => {
    if (!selectedComponent) return;
    selectedComponent.style.left = "0px";
};
document.getElementById("align-center").onclick = () => {
    if (!selectedComponent) return;
    const parentWidth = canvas.offsetWidth;
    const compWidth = selectedComponent.offsetWidth;
    selectedComponent.style.left = ((parentWidth - compWidth) / 2) + "px";
};
document.getElementById("align-top").onclick = () => {
    if (!selectedComponent) return;
    selectedComponent.style.top = "0px";
};


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


function updateStyleEditorValuesToDefaults() {
    document.getElementById("edit-text").value = "";
    document.getElementById("edit-bg").value = "#ffffff";
    document.getElementById("edit-color").value = "#000000";
    document.getElementById("edit-font").value = 14;
    document.getElementById("edit-width").value = 100;
    document.getElementById("edit-height").value = 50;
    document.getElementById("edit-image").value = "";
    document.getElementById("edit-bg-image").value = "";
}


function makeDraggable(el) {
    let isDragging = false, offsetX = 0, offsetY = 0;
    el.addEventListener('mousedown', e => {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "BUTTON") return;
        isDragging = true;

        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;
        // offsetX = e.offsetX;
        // offsetY = e.offsetY;
    });
    document.addEventListener('mousemove', e => {
        if (!isDragging) return;
        // el.style.left = (e.pageX - offsetX) + 'px';
        // el.style.top = (e.pageY - offsetY) + 'px';
        // el.style.left = e.clientX - offsetX + "px";
        // el.style.top = e.clientY - offsetY + "px";
        const grid = 10;
        el.style.left = Math.round((e.clientX - offsetX) / grid) * grid + "px";
        el.style.top = Math.round((e.clientY - offsetY) / grid) * grid + "px";

    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
        updatePreview();
    });

}

document.getElementById("save-layout").addEventListener("click", saveLayout);

document.getElementById("edit-x").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.left = parseInt(e.target.value) + "px";
});
document.getElementById("edit-y").addEventListener("input", e => {
    if (!selectedComponent) return;
    selectedComponent.style.top = parseInt(e.target.value) + "px";
});


function saveLayout() {
    const comps = [];
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    canvas.querySelectorAll(".component").forEach(el => {
        let content = {};
        if (el.dataset.type === "image") {
            const img = el.querySelector("img");
            content.image_url = img ? img.src : "";
        } else {
            content.text = el.innerText;
        }

        let br = "";
        if (el.dataset.type === "image") {
            const img = el.querySelector("img");
            br = img && img.style.borderRadius ? img.style.borderRadius : el.style.borderRadius || "";
        } else {
            br = el.style.borderRadius || "";
        }

        comps.push({
            id: el.dataset.id || Date.now(),
            type: el.dataset.type || "text",
            position: {
                x: parseInt(el.style.left) || 0,
                y: parseInt(el.style.top) || 0
            },
            size: {
                width: el.offsetWidth,
                height: el.offsetHeight
            },
            z_index: parseInt(el.style.zIndex) || 1,
            content: content,
            style: {
                background_color: el.style.backgroundColor || "",
                color: el.style.color || "",
                font_size: el.style.fontSize || "",
                background_image: el.style.backgroundImage ? el.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '') : "",
                border_radius: br
            }
        });
    });

    const layout = {
        id: id,
        components: comps,
        canvas_background: getBackgroundImageUrl(canvas)
    };

    fetch(`/api/layouts/save?id=${id}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(layout)
    })

        .then(res => res.json())
        .then(data => {
            if (data.status === "ok") alert("Ошибка сохранения");
            else alert("Макет сохранён!");
        })
        .catch(err => alert("Ошибка: " + err));
    updatePreview();

}

//utilities
function getBackgroundImageUrl(el) {
    const bg = el.style.backgroundImage;
    if (!bg || bg === "none") return "";
    const match = bg.match(/url\(["']?(.*?)["']?\)/);
    return match ? match[1] : "";
}
function rgbToHex(rgb) {
    if (!rgb) return "#000000";
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
    return result ? "#" + ((1 << 24) + (parseInt(result[1]) << 16) + (parseInt(result[2]) << 8) + parseInt(result[3])).toString(16).slice(1) : rgb;
}



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
setInterval(refreshLayersPanel, 500);




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



function applyNewZIndexes() {
    const items = Array.from(layersList.querySelectorAll("li"));

    items.forEach((li, index) => {
        const id = li.dataset.id;
        const block = document.querySelector(`.component[data-id="${id}"]`);
        block.style.zIndex = index;
    });

    refreshLayersPanel();
}
canvas.addEventListener("mousedown", (e) => {
    if (e.target !== canvas) return;

    startX = e.offsetX;
    startY = e.offsetY;

    selectionBox = document.createElement("div");
    selectionBox.classList.add("selection-box");
    selectionBox.style.left = startX + "px";
    selectionBox.style.top = startY + "px";
    canvas.appendChild(selectionBox);
});

canvas.addEventListener("mousemove", (e) => {
    if (!selectionBox) return;

    const w = e.offsetX - startX;
    const h = e.offsetY - startY;

    selectionBox.style.width = Math.abs(w) + "px";
    selectionBox.style.height = Math.abs(h) + "px";
    selectionBox.style.left = (w < 0 ? e.offsetX : startX) + "px";
    selectionBox.style.top = (h < 0 ? e.offsetY : startY) + "px";
});

canvas.addEventListener("mouseup", () => {
    if (!selectionBox) return;

    const sb = selectionBox.getBoundingClientRect();

    selectedComponents = [];
    document.querySelectorAll(".component").forEach(c => {
        const r = c.getBoundingClientRect();

        if (!(r.right < sb.left || r.left > sb.right || r.bottom < sb.top || r.top > sb.bottom)) {
            c.classList.add("selected");
            selectedComponents.push(c);
        } else {
            c.classList.remove("selected");
        }
    });

    selectionBox.remove();
    selectionBox = null;
});
// document.getElementById("group-btn").addEventListener("click", () => {
//     if (selectedComponents.length < 2) return;
//
//     const group = document.createElement("div");
//     group.className = "component group";
//     group.style.position = "absolute";
//
//     const canvasRect = canvas.getBoundingClientRect();
//
//     let minX = Infinity, minY = Infinity;
//
//     selectedComponents.forEach(el => {
//         const r = el.getBoundingClientRect();
//         const x = r.left - canvasRect.left;
//         const y = r.top - canvasRect.top;
//
//         minX = Math.min(minX, x);
//         minY = Math.min(minY, y);
//     });
//
//     group.style.left = minX + "px";
//     group.style.top = minY + "px";
//
//     selectedComponents.forEach(el => {
//         group.appendChild(el);
//     });
//
//     canvas.appendChild(group);
//
//     makeDraggable(group);
//     selectedComponents = [group];
// });
// document.getElementById("ungroup-btn").addEventListener("click", () => {
//     const group = document.querySelector(".group.selected");
//     if (!group) return;
//
//     const children = [...group.children];
//
//     children.forEach(child => {
//         canvas.appendChild(child);
//     });
//
//     group.remove();
// });

canvas.classList.add("light");
updateThemeUI();
const previewBar = document.getElementById("preview-bar");

async function updatePreview() {
    if (!canvas) return;

    const shot = await html2canvas(canvas, {
        backgroundColor: null,
        scale: 0.2
    });

    const img = document.createElement("img");
    img.src = shot.toDataURL("image/png");
    img.style.height = "80px";
    img.style.borderRadius = "8px";
    img.style.border = "1px solid rgba(255,255,255,0.15)";
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
        canvas.scrollIntoView({ behavior: "smooth" });
    });

    previewBar.innerHTML = "";
    previewBar.appendChild(img);
}

loadLayout();
hideAllControls();
setTimeout(updatePreview, 500);

