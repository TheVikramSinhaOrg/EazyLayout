// StateModel.js
// Central app state including all components and undo stack

export class StateModel {
    constructor() {
      this.components = {}; // { id: ComponentModel }
      this.selectedId = null;
      this.undoStack = [];
      this.redoStack = [];
    }
  
    addComponent(component) {
      this.components[component.id] = component;
      this.saveState();
    }
  
    removeComponent(id) {
      delete this.components[id];
      this.saveState();
    }
  
    getComponent(id) {
      return this.components[id];
    }
  
    selectComponent(id) {
      this.selectedId = id;
    }
  
    getSelected() {
      return this.components[this.selectedId] || null;
    }
  
    saveState() {
      this.undoStack.push(JSON.stringify(this.components));
      if (this.undoStack.length > 50) this.undoStack.shift();
      this.redoStack = [];
    }
  
    undo() {
      if (this.undoStack.length > 1) {
        this.redoStack.push(this.undoStack.pop());
        this.components = JSON.parse(this.undoStack[this.undoStack.length - 1]);
      }
    }
  
    redo() {
      if (this.redoStack.length > 0) {
        const next = this.redoStack.pop();
        this.undoStack.push(next);
        this.components = JSON.parse(next);
      }
    }
  
    toJSON() {
      return {
        components: this.components,
        selectedId: this.selectedId
      };
    }
  
    loadFrom(data) {
      this.components = data.components || {};
      this.selectedId = data.selectedId || null;
    }
  }
  