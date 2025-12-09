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