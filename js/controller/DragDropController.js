// DragDropController.js

export const DragDropController = {
  init(app) {
    // Enable dragging for all .component-item
    interact('.component-item').draggable({
      inertia: true,
      autoScroll: true,
      onstart(event) {
        event.interaction.element = event.target;
      }
    });

    // Enable dropping into the canvas
    interact('#canvas').dropzone({
      accept: '.component-item',
      overlap: 0.75,
      ondrop(event) {
        const type = event.relatedTarget.textContent.trim();
        const newEl = DragDropController.createComponent(type);
        if (newEl) {
          event.target.appendChild(newEl);
          app.selectComponent(newEl);
        }
      }
    });
  },

  createComponent(type) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('component-wrapper');
    wrapper.setAttribute('data-type', type);

    const el = document.createElement('div');
    el.classList.add('component');
    el.setAttribute('contenteditable', 'true');

    switch (type) {
      case 'Text':
        el.textContent = 'Editable Text';
        break;
      case 'Image':
        el.innerHTML = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#eee;"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#888" font-size="16">Placeholder Image</text></svg>';
        break;
      case 'Button':
        el.innerHTML = '<button>Click Me</button>';
        break;
      case 'Line Chart':
        el.innerHTML = '<div style="width:100%;height:200px;background:#f8fafc;text-align:center;line-height:200px;color:#999;">[Line Chart]</div>';
        break;
      case 'Bar Chart':
        el.innerHTML = '<div style="width:100%;height:200px;background:#f8fafc;text-align:center;line-height:200px;color:#999;">[Bar Chart]</div>';
        break;
      default:
        el.textContent = type;
    }

    // Add hover-delete icon
    const delBtn = document.createElement('span');
    delBtn.classList.add('delete-btn');
    delBtn.textContent = '✕';
    delBtn.title = 'Remove';
    delBtn.onclick = () => wrapper.remove();

    wrapper.appendChild(delBtn);
    wrapper.appendChild(el);

    wrapper.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.component-wrapper.selected').forEach(c => c.classList.remove('selected'));
      wrapper.classList.add('selected');
    });

    return wrapper;
  }
};
