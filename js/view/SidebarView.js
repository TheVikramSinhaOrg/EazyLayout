// SidebarView.js

export const SidebarView = {
  init(container) {
    const categories = {
      "Basic": ["Text", "Image", "Button", "Heading", "Container"],
      "Media": ["Video", "Audio", "Icon", "SVG"],
      "Charts": ["Line Chart", "Bar Chart", "Pie Chart", "Radar Chart", "Time Series"],
      "Layout": ["Grid", "Flex Row", "Flex Column", "Divider"],
      "Forms": ["Input", "Textarea", "Checkbox", "Radio", "Dropdown"],
      "Admin": ["Table", "Card", "Avatar", "Breadcrumb", "Notification", "Tabs", "Modal"],
      "Shapes": ["Circle", "Rectangle"]
    };

    container.innerHTML = Object.entries(categories).map(([title, items]) => {
      return `
        <div class="category">
          <div class="category-header">${title}</div>
          <div class="category-body">
            ${items.map(item => `<div class="component-item" draggable="true">${item}</div>`).join('')}
          </div>
        </div>
      `;
    }).join('');

    // Collapse toggle
    container.querySelectorAll('.category-header').forEach(header => {
      header.addEventListener('click', () => {
        header.classList.toggle('collapsed');
        const body = header.nextElementSibling;
        if (body) body.style.display = header.classList.contains('collapsed') ? 'none' : 'block';
      });
    });
  }
};
