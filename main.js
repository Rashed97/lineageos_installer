var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        title: electron.app.getProductName(),
        titleBarStyle: process.platform === 'darwin' ? 'hidden-inset' : 'default',
        height: 600,
        resizable: false,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});
