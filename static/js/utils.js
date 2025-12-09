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