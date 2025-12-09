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