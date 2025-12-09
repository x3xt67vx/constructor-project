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
