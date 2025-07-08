// StylePanelView.js
// Renders the style editor panel for the selected component

export const StylePanelView = {
  renderStyleControls(component, container) {
    container.innerHTML = '';

    const createInput = (label, key, value) => {
      const group = document.createElement('div');
      group.className = 'style-group';

      const lbl = document.createElement('label');
      lbl.textContent = label;

      // Color swatches
      if (key.toLowerCase().includes('color')) {
        const swatchWrap = document.createElement('div');
        swatchWrap.className = 'color-palette';
        const swatches = ['#ff4081', '#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#10b981', '#64748b'];

        swatches.forEach(color => {
          const swatch = document.createElement('div');
          swatch.className = 'color-swatch';
          swatch.style.background = color;
          swatch.setAttribute('data-style-key', key);
          swatch.setAttribute('data-color', color);
          swatch.addEventListener('click', () => {
            colorInput.value = color;
            textInput.value = color;
            colorInput.dispatchEvent(new Event('input'));
          });
          swatchWrap.appendChild(swatch);
        });
        group.appendChild(lbl);
        group.appendChild(swatchWrap);

        // Native color input
        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = value || '#ffffff';
        colorInput.setAttribute('data-style-key', key);
        colorInput.addEventListener('input', () => {
          textInput.value = colorInput.value;
        });
        group.appendChild(colorInput);

        // Manual hex/rgb/rgba text input
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = '#hex, rgb(...), or rgba(...)';
        textInput.value = value || '';
        textInput.setAttribute('data-style-key', key);
        textInput.addEventListener('input', () => {
          colorInput.value = textInput.value;
        });
        group.appendChild(textInput);

        // Opacity input (0 to 1 scale)
        const opacityInput = document.createElement('input');
        opacityInput.type = 'range';
        opacityInput.min = 0;
        opacityInput.max = 1;
        opacityInput.step = 0.01;
        opacityInput.value = component.styles?.opacity || 1;
        opacityInput.setAttribute('data-style-key', 'opacity');

        const opacityLabel = document.createElement('label');
        opacityLabel.textContent = 'Opacity';

        group.appendChild(opacityLabel);
        group.appendChild(opacityInput);

        return group;
      }

      // Default input for other styles
      const input = document.createElement('input');
      input.value = value || '';
      input.setAttribute('data-style-key', key);
      input.placeholder = key;
      group.appendChild(lbl);
      group.appendChild(input);
      return group;
    };

    container.appendChild(createInput('Width', 'width', component.styles?.width));
    container.appendChild(createInput('Height', 'height', component.styles?.height));
    container.appendChild(createInput('Font Size', 'fontSize', component.styles?.fontSize));
    container.appendChild(createInput('Color', 'color', component.styles?.color));
    container.appendChild(createInput('Background', 'backgroundColor', component.styles?.backgroundColor));
  },

  getStylesFromInputs(container) {
    const styles = {};
    container.querySelectorAll('[data-style-key]').forEach(input => {
      const key = input.getAttribute('data-style-key');
      styles[key] = input.value;
    });
    return styles;
  }
};
