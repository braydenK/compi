const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let window;

function createWindow() {

  const iconUrl = url.format({
    pathname: path.join(__dirname, 'Icon/logo.icns'),
    protocol: 'file:',
    slashes: true
  })

  window = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Compi",
    titleBarStyle: 'hidden',
    icon: iconUrl,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: './preload.js'
    },
  });

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  window.loadURL(startUrl);
  window.webContents.openDevTools();

  window.on('closed', function() {
    window = null;
  });

  // Install React Dev Tools
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (window === null) {
    createWindow();
  }
});
