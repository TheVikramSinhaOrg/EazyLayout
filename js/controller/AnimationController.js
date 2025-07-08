// AnimationController.js
// Applies animations to selected component

import { AnimationModel } from '../model/AnimationModel.js';

export const AnimationController = {
  applyAnimation(state, canvas, animationSettings) {
    const selected = state.getSelected();
    if (!selected) return;

    selected.setAnimation(animationSettings);
    const el = canvas.querySelector(`[data-id='${selected.id}']`);
    if (el) {
      AnimationModel.applyToElement(el, animationSettings);
    }
  }
};
