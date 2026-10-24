const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');

const dataFile = () => path.join(app.getPath('userData'), 'data.json');

ipcMain.handle('load', () => {
  try {
    return JSON.parse(fs.readFileSync(dataFile(), 'utf8'));
  } catch {
    return null;
  }
});

ipcMain.handle('save', (_e, data) => {
  fs.writeFileSync(dataFile(), JSON.stringify(data));
});

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1000,
    height: 680,
    minWidth: 640,
    minHeight: 420,
    title: 'Taskly',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.removeMenu();
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
});

app.on('window-all-closed', () => app.quit());
