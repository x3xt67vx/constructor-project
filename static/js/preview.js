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