// ComponentModel.js
// Defines structure of a UI component in the builder

export class ComponentModel {
    constructor(type, id, parentId = null) {
      this.id = id;
      this.type = type;
      this.parentId = parentId;
      this.styles = {};        // Inline CSS styles
      this.animations = {};    // Entry animation settings
      this.content = '';       // Editable text or HTML
      this.children = [];      // Nested component IDs
    }
  
    updateStyles(newStyles) {
      this.styles = { ...this.styles, ...newStyles };
    }
  
    setAnimation(settings) {
      this.animations = settings;
    }
  
    setContent(html) {
      this.content = html;
    }
  
    addChild(childId) {
      this.children.push(childId);
    }
  
    toJSON() {
      return {
        id: this.id,
        type: this.type,
        parentId: this.parentId,
        styles: this.styles,
        animations: this.animations,
        content: this.content,
        children: this.children
      };
    }
  }
  