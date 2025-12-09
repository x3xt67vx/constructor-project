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