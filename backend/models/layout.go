package models

import "encoding/json"

type Component struct {
	ID       int    `json:"id"`
	Type     string `json:"type"`
	Position struct {
		X int `json:"x"`
		Y int `json:"y"`
	} `json:"position"`
	Size struct {
		Width  int `json:"width"`
		Height int `json:"height"`
	} `json:"size"`
	ZIndex  int             `json:"z_index"`
	Content json.RawMessage `json:"content"`
	Style   json.RawMessage `json:"style"`
}

type UserLayout struct {
	ID               int             `json:"id"`
	Name             string          `json:"name"`
	Components       json.RawMessage `json:"components"`
	CanvasBackground string          `json:"canvas_background,omitempty"`
}
