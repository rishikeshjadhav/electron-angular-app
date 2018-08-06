const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    // Create the browser window
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff'
    });

    win.loadURL(`file://${__dirname}/dist/index.html`);

    win.webContents.openDevTools();

    win.on('close', function () {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    // On MAC OS
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // MAC OS - Close process
    if (nul === win) {
        createWindow();
    }
});

