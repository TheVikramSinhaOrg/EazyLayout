// ExportView.js
// Handles exporting canvas content into downloadable HTML

export const ExportView = {
    generateHTML(stateModel) {
      const container = document.createElement('div');
  
      Object.values(stateModel.components).forEach(component => {
        const el = document.createElement('div');
        el.setAttribute('data-type', component.type);
        el.innerHTML = component.content || '';
        Object.entries(component.styles || {}).forEach(([key, val]) => {
          el.style[key] = val;
        });
        container.appendChild(el);
      });
  
      return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>Exported Layout</title>
  <style>
  body { font-family: sans-serif; padding: 20px; }
  </style>
  </head>
  <body>
  ${container.innerHTML}
  </body>
  </html>`;
    }
  };
  