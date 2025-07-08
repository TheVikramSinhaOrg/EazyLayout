// StyleController.js
// Applies style changes to selected component

import { StylePanelView } from '../view/StylePanelView.js';

export const StyleController = {
  applyStyles(state, canvas, panel) {
    const selected = state.getSelected();
    if (!selected) return;
    const styles = StylePanelView.getStylesFromInputs(panel);
    selected.updateStyles(styles);
    const el = canvas.querySelector(`[data-id='${selected.id}']`);
    if (el) {
      Object.entries(styles).forEach(([k, v]) => {
        el.style[k] = v;
      });
    }
  }
};
