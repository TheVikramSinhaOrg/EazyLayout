# 🧱 Web Page Builder (No-Framework)

A fully browser-based, responsive drag-and-drop web page builder built using **vanilla HTML, CSS, and JavaScript**. Inspired by tools like GrapesJS and Canva, minus the bloat and without any backend or user login.

---

## ✅ Core Features

- **Drag & Drop Components**
  - Text, Heading (H1–H3), Button, Icon (SVG), Div, Video (YouTube iframe)
  - Image blocks use dynamic **SVG placeholders** that show dimensions live

- **Canvas Editor**
  - Nestable, movable, resizable components
  - Select and delete components
  - Inline SVG rendering for image placeholders with dynamic size updates

- **Style & Animation Panel**
  - Customize styles: font, background, spacing, borders, layout
  - Add entry animations: fade, zoom, slide, bounce
  - Control duration and delay using CSS classes or inline styles

- **Live Preview Mode**
  - Toggle to view a clean version of the page without editor UI

- **HTML Export**
  - Outputs a standalone HTML file with inline styles and animations

- **Responsive Interface**
  - Fully functional down to **768px** (tablet width)
  - Sidebars collapse into tabs or drawers for smaller screens

---

## 🛠 Tech Stack

- **Pure JavaScript** (No frameworks)
- **CSS Flexbox/Grid**
- **[Interact.js](https://interactjs.io/)** — for drag, drop, resize
- **[Sortable.js](https://github.com/SortableJS/Sortable)** — for reordering components
- **[FileSaver.js](https://github.com/eligrey/FileSaver.js/)** — for exporting HTML

---

## 📁 Directory Structure

/webpage-builder/
│
├── index.html
├── styles/
│ ├── main.css
│ ├── responsive.css
│ └── animations.css
│
├── js/
│ ├── model/
│ │ ├── ComponentModel.js
│ │ ├── StateModel.js
│ │ └── AnimationModel.js
│ ├── view/
│ │ ├── CanvasView.js
│ │ ├── SidebarView.js
│ │ ├── StylePanelView.js
│ │ └── ExportView.js
│ └── controller/
│ ├── AppController.js
│ ├── DragDropController.js
│ ├── StyleController.js
│ ├── AnimationController.js
│ └── ExportController.js
│
├── assets/
│ └── icons/
│
└── libs/
├── interact.min.js
├── sortable.min.js
└── FileSaver.min.js


---

## 🔒 No Backend

- No login, no server
- All data lives in memory
- 100% client-side for rapid prototyping

---

## 📜 License

This project is licensed under the **GNU Affero General Public License v3.0**.  
See the [LICENSE](./LICENSE) file for details.

> If you modify and deploy this application publicly (e.g. as a web service), the source code of your modified version must also be made available under AGPLv3.
