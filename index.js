const path = require('path');
const { app, ipcMain } = require('electron');
const CustomTray = require('./app/customTray');
const MainWindow = require('./app/mainWindow');

let mainWindow, tray;

app.on('ready', () => {
  app.dock.hide();
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);

  const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png';
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`);
  tray = new CustomTray(iconPath, mainWindow);
});

ipcMain.on('update-timer',(event, timeLeft) => {
  tray.setTitle(timeLeft);
} )