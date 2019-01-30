const path = require('path');
const { app, BrowserWindow } = require('electron');
const CustomTray = require('./app/custom_tray');

let mainWindow, tray;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 300,
    frame: false,
    resizable: false,
    show: false
  });
  mainWindow.loadURL(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new CustomTray(iconPath, mainWindow);
});