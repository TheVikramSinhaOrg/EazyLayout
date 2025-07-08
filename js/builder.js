// Save/Load JSON logic
const saveBtn = document.getElementById('save-project-btn');
const loadInput = document.getElementById('load-project-input');
let currentState = {}; // Assume this holds the full app state

saveBtn.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(currentState, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'eazylayout-project.json';
  a.click();
  URL.revokeObjectURL(url);
});

loadInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      currentState = data;
      restoreFromState(currentState);
    } catch (err) {
      alert('Invalid project file.');
    }
  };
  reader.readAsText(file);
});

// Prevent accidental tab close
let unsaved = false;
window.addEventListener('beforeunload', (e) => {
  if (unsaved) {
    e.preventDefault();
    e.returnValue = '';
  }
});

// Mark as unsaved when changes happen
function markUnsaved() {
  unsaved = true;
}

// Dummy restore function (to be implemented)
function restoreFromState(state) {
  console.log('Restoring project:', state);
  // TODO: Clear canvas, loop through components, re-render
}

// Hook your builder logic to call markUnsaved() on any user action
