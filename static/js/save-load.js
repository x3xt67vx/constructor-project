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