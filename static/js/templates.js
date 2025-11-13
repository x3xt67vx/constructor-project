export const TEMPLATES = {
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
                content: { text: "Name/Username" },
                style: { background_color: "#fff", color: "#333", font_size: "18px", background_image: "" }
            },
            {
                id: Date.now() + 3,
                type: "text",
                position: { x: 160, y: 70 },
                size: { width: 200, height: 25 },
                z_index: 1,
                content: { text: "Job" },
                style: { background_color: "#fff", color: "#666", font_size: "14px", background_image: "" }
            },
            {
                id: Date.now() + 4,
                type: "link",
                position: { x: 160, y: 100 },
                size: { width: 200, height: 25 },
                z_index: 1,
                content: { text: "GitHub", url: "https://github.com/username" },
                style: { background_color: "#fff", color: "#1a0dab", font_size: "14px", background_image: "" }
            }
        ]
    }
};
