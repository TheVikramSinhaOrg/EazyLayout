// js/controller/DragDropController.js

export class DragDropController {
  static init(appInstance) {
    const canvas = document.getElementById('canvas');
    let draggedComponent = null;

    // Set all component items as draggable
    document.querySelectorAll('.component-item').forEach(el => {
      el.addEventListener('dragstart', (e) => {
        draggedComponent = el.textContent.trim();
        e.dataTransfer.setData('text/plain', draggedComponent);
      });
    });

    // Allow drop on canvas
    canvas.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    canvas.addEventListener('drop', (e) => {
      e.preventDefault();
      if (!draggedComponent) return;

      const newElement = DragDropController.createComponent(draggedComponent);
      newElement.classList.add('draggable');

      // Append the new component
      canvas.appendChild(newElement);

      // Reset
      draggedComponent = null;
    });
  }

  static createComponent(type) {
    const el = document.createElement('div');
    el.classList.add('canvas-component');

    // Add inner content based on type
    switch (type) {
      case 'Text':
        el.innerHTML = '<p contenteditable="true">Edit text</p>';
        break;
      case 'Image':
        el.innerHTML = '<img src="https://via.placeholder.com/150" alt="Placeholder Image">';
        break;
      case 'Button':
        el.innerHTML = '<button>Click Me</button>';
        break;
      case 'Line Chart':
      case 'Bar Chart':
        el.innerHTML = `<div style="width:100%;height:150px;background:#eee;text-align:center;line-height:150px;">[ ${type} Placeholder ]</div>`;
        break;
      default:
        el.innerText = type;
    }

    // Add delete-on-hover icon
    const deleteBtn = document.createElement('span');
    deleteBtn.innerHTML = '✕';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
      el.remove();
    });

    el.appendChild(deleteBtn);

    return el;
  }
}
