const path = require('path');
const { app, BrowserWindow, Tray } = require('electron');

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
  tray = new Tray(iconPath);
  tray.on('click', () => {
    if(mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });
});