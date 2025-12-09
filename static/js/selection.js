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