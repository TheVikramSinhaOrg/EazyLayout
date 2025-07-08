// CanvasView.js
// Handles rendering and interaction on the main canvas

export const CanvasView = {
    clearCanvas(container) {
      container.innerHTML = '';
    },
  
    renderComponent(component) {
      const el = document.createElement('div');
      el.setAttribute('data-id', component.id);
      el.setAttribute('data-type', component.type);
      el.classList.add('component');
      el.classList.add('resizable');
  
      // Apply content
      el.innerHTML = component.content || component.type;
  
      // Apply styles
      Object.entries(component.styles || {}).forEach(([key, val]) => {
        el.style[key] = val;
      });
  
      return el;
    },
  
    attachToCanvas(el, canvas) {
      canvas.appendChild(el);
    },
  
    setSelected(el) {
      el.classList.add('selected');
    },
  
    clearSelected(canvas) {
      canvas.querySelectorAll('.selected').forEach(e => e.classList.remove('selected'));
    }
  };
  