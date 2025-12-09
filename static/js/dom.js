
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