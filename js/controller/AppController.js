// AppController.js
// Central controller to wire models and views together

import { StateModel } from '../model/StateModel.js';
import { CanvasView } from '../view/CanvasView.js';
import { SidebarView } from '../view/SidebarView.js';
import { StylePanelView } from '../view/StylePanelView.js';

export class AppController {
  constructor(canvas, stylePanel) {
    this.canvas = canvas;
    this.stylePanel = stylePanel;
    this.state = new StateModel();
    //SidebarView.bindToggleEvents();
  }

  addComponent(component) {
    this.state.addComponent(component);
    const el = CanvasView.renderComponent(component);
    CanvasView.attachToCanvas(el, this.canvas);
    this.bindSelection(el);
  }

  bindSelection(el) {
    el.addEventListener('click', () => {
      CanvasView.clearSelected(this.canvas);
      CanvasView.setSelected(el);
      const id = el.getAttribute('data-id');
      this.state.selectComponent(id);
      StylePanelView.renderStyleControls(this.state.getSelected(), this.stylePanel);
    });
  }

  applyStyles() {
    const selected = this.state.getSelected();
    if (!selected) return;
    const newStyles = StylePanelView.getStylesFromInputs(this.stylePanel);
    selected.updateStyles(newStyles);
    const el = this.canvas.querySelector(`[data-id='${selected.id}']`);
    Object.entries(newStyles).forEach(([k, v]) => el.style[k] = v);
  }

  getState() {
    return this.state;
  }
}
