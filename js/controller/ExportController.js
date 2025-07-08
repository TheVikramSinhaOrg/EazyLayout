// ExportController.js
// Handles exporting the builder layout as downloadable HTML

import { ExportView } from '../view/ExportView.js';

export const ExportController = {
  exportHTML(state) {
    const html = ExportView.generateHTML(state);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'eazylayout-export.html';
    a.click();
    URL.revokeObjectURL(url);
  }
};
