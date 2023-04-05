const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

// Create an application menu
const menuTemplate = [];
// We can ask the OS for default menus by role(Electron has in built roles), and they will be built for us
const appMenu = { role: 'appMenu' };
const fileMenu = { role: 'fileMenu' }
const editMenu = { role: 'editMenu' };
const windowMenu = { role: 'windowMenu' };

const devMenu = {
    label: 'Options',
    submenu: [
        { role: 'toggleDevTools', label: 'Dev Tools', accelerator: 'F12' },
        { role: 'reload' },
        { role: 'forceReload' },
    ],
}


// Build menu template
if (process.platform === 'darwin') {
    menuTemplate.push(appMenu);
} else {
    menuTemplate.push(fileMenu);
}
menuTemplate.push(editMenu, windowMenu);

// the dev menu only shows when app is not in production
if (process.env.NODE_ENV !== 'production') {
    menuTemplate.push(devMenu);
}

// Build the menu from the template
const menu = electron.Menu.buildFromTemplate(menuTemplate);

// And set it for the application
electron.Menu.setApplicationMenu(menu);

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 550,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});