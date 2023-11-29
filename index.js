const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, './src/preload.js'),
    },
  });

  win.loadFile('public/index.html');

  let watcher;
  if (process.env.NODE_ENV === 'development') {
    watcher = require('chokidar').watch(
      path.join(__dirname, 'public/bundle.js'),
      { ignoreInitial: true },
    );
    watcher.on('change', () => {
      win.reload();
    });
  }

  win.on('closed', () => {
    if (watcher) {
      watcher.close();
    }
  });
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
