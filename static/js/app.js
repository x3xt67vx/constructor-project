const TEMPLATES = {
    profile: {
        components: [
            {
                id: Date.now() + 1,
                type: "image",
                position: { x: 50, y: 20 },
                size: { width: 100, height: 100 },
                z_index: 1,
                content: { image_url: "https://via.placeholder.com/100" },
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
                size: { width: 200, height: 25 },
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
const canvas = document.getElementById("canvas");

async function loadLayout() {
    const res = await fetch("/api/layouts/1");
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
}

// Добавление компонента на canvas
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
    } else if (comp.type === "link") {
        const a = document.createElement("a");
        a.href = comp.content.url || "#";
        a.target = "_blank";
        a.innerText = comp.content.text || "Ссылка";
        div.appendChild(a);
    }  else {
        div.innerText = comp.content.text || "";
    }

    makeDraggable(div);
    canvas.appendChild(div);

    div.addEventListener("click", () => selectComponent(div));
}

// Выбор компонента
function selectComponent(el) {
    if (selectedComponent) selectedComponent.style.border = "1px solid #ccc";
    selectedComponent = el;
    el.style.border = "2px solid blue";
    updateStyleEditor(el);
}

// Обновление панели стилей для выбранного блока
function updateStyleEditor(el) {
    document.getElementById("edit-text").value = el.innerText || "";
    document.getElementById("edit-bg").value = rgbToHex(el.style.backgroundColor || "#ffffff");
    document.getElementById("edit-color").value = rgbToHex(el.style.color || "#000000");
    document.getElementById("edit-font").value = parseInt(el.style.fontSize) || 14;
    document.getElementById("edit-width").value = parseInt(el.style.width) || 100;
    document.getElementById("edit-height").value = parseInt(el.style.height) || 50;
    document.getElementById("edit-image").value = el.dataset.type === "image" && el.querySelector("img") ? el.querySelector("img").src : "";
    document.getElementById("edit-bg-image").value = el.style.backgroundImage ? el.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '') : "";
}

// Динамическое редактирование выбранного блока
document.getElementById("edit-text").addEventListener("input", e => { if (selectedComponent) selectedComponent.innerText = e.target.value; });
document.getElementById("edit-bg").addEventListener("input", e => { if (selectedComponent) selectedComponent.style.backgroundColor = e.target.value; });
document.getElementById("edit-color").addEventListener("input", e => { if (selectedComponent) selectedComponent.style.color = e.target.value; });
document.getElementById("edit-font").addEventListener("input", e => { if (selectedComponent) selectedComponent.style.fontSize = e.target.value + "px"; });
document.getElementById("edit-width").addEventListener("input", e => { if (selectedComponent) selectedComponent.style.width = e.target.value + "px"; });
document.getElementById("edit-height").addEventListener("input", e => { if (selectedComponent) selectedComponent.style.height = e.target.value + "px"; });
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
document.getElementById("edit-bg-image").addEventListener("input", e => {
    if (selectedComponent) {
        selectedComponent.style.backgroundImage = `url(${e.target.value})`;
        selectedComponent.style.backgroundSize = "cover";
        selectedComponent.style.backgroundPosition = "center";
    }
});

// Панель фоновых картинок
document.getElementById("canvas-bg-url").addEventListener("input", e => {
    canvas.style.backgroundImage = `url(${e.target.value})`;
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundPosition = "center";
});
document.getElementById("clear-canvas-bg").addEventListener("click", () => {
    canvas.style.backgroundImage = "";
    document.getElementById("canvas-bg-url").value = "";
});
document.getElementById("clear-bg-image").addEventListener("click", () => {
    if (selectedComponent) {
        selectedComponent.style.backgroundImage = "";
        document.getElementById("edit-bg-image").value = "";
    }
});

// Удаление блока
document.getElementById("delete-block").addEventListener("click", () => {
    if (selectedComponent) {
        selectedComponent.remove();
        selectedComponent = null;
        // очистка панели стилей
        updateStyleEditorValuesToDefaults();
    }
});
// Открыть меню шаблонов
document.getElementById("choose-template-btn").addEventListener("click", () => {
    document.getElementById("template-selector").style.display = "block";
});

// Закрыть меню
document.getElementById("close-template-selector").addEventListener("click", () => {
    document.getElementById("template-selector").style.display = "none";
});

// Выбор шаблона
document.querySelectorAll(".select-template").forEach(btn => {
    btn.addEventListener("click", () => {
        const tpl = btn.dataset.tpl;
        addTemplate(tpl);
        document.getElementById("template-selector").style.display = "none";
    });
});

document.addEventListener("keydown", (e) => {
    if ((e.key === "Delete" || e.key === "Backspace") && selectedComponent) {
        selectedComponent.remove();
        selectedComponent = null;

        updateStyleEditorValuesToDefaults();
    }
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

document.querySelectorAll(".template-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.type;

        if (TEMPLATES[type]) {
            addTemplate(type); // вставка шаблона
        } else {
            // обычный блок
            const comp = {
                id: Date.now(),
                type: type,
                position: { x: 50, y: 50 },
                size: { width: 200, height: type === "image" ? 150 : 50 },
                z_index: 1,
                content: type === "image" ? { image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ThUgDFctLmsjTh0g8F0lDaj82zhpOrk_Tw&s" } : { text: type.toUpperCase() },
                style: { background_color: "#fff", color: "#000", font_size: "16px", background_image: "" }
            };
            addComponentToCanvas(comp, canvas);
        }
    });
});


// Drag & Drop
function makeDraggable(el) {
    let isDragging = false, offsetX, offsetY;
    el.addEventListener('mousedown', e => {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });
    document.addEventListener('mousemove', e => {
        if (!isDragging) return;
        el.style.left = (e.pageX - offsetX) + 'px';
        el.style.top = (e.pageY - offsetY) + 'px';
    });
    document.addEventListener('mouseup', () => { isDragging = false; });
}

// Сохранение макета
document.getElementById("save-layout").addEventListener("click", saveLayout);

function saveLayout() {
    const comps = [];
    canvas.querySelectorAll(".component").forEach(el => {
        let content = {};
        if (el.dataset.type === "image") {
            const img = el.querySelector("img");
            content.image_url = img ? img.src : "";
        } else {
            content.text = el.innerText;
        }

        comps.push({
            id: el.dataset.id,
            type: el.dataset.type,
            position: { x: parseInt(el.style.left), y: parseInt(el.style.top) },
            size: { width: el.offsetWidth, height: el.offsetHeight },
            z_index: parseInt(el.style.zIndex) || 1,
            content: content,
            style: {
                background_color: el.style.backgroundColor || "#fff",
                color: el.style.color || "#000",
                font_size: el.style.fontSize || "16px",
                background_image: el.style.backgroundImage ? el.style.backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '') : ""
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

function getBackgroundImageUrl(el) {
    const bg = el.style.backgroundImage;
    if (!bg || bg === "none") return "";
    const match = bg.match(/url\(["']?(.*?)["']?\)/);
    return match ? match[1] : "";
}

function rgbToHex(rgb) {
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
    return result ? "#" + ((1 << 24) + (parseInt(result[1]) << 16) + (parseInt(result[2]) << 8) + parseInt(result[3])).toString(16).slice(1) : rgb;
}
function addTemplate(templateName) {
    const template = TEMPLATES[templateName];
    if (!template) return;

    template.components.forEach(comp => {
        const newComp = JSON.parse(JSON.stringify(comp));
        newComp.id = Date.now() + Math.floor(Math.random() * 1000); // уникальный id
        addComponentToCanvas(newComp, canvas);
    });
}


loadLayout();
