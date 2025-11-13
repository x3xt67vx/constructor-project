CREATE TABLE IF NOT EXISTS user_layouts (
                                            id SERIAL PRIMARY KEY,
                                            name TEXT NOT NULL,
                                            layout JSONB NOT NULL DEFAULT '{}'::jsonb,
                                            created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
    );

INSERT INTO user_layouts (id, name, layout)
VALUES (1, 'First Layout', '{"id":1,"name":"First Layout","components":[],"canvas_background":""}'::jsonb)
    ON CONFLICT (id) DO NOTHING;
