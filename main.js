const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');

var startHandler = ()=>{
  let win = new BrowserWindow({width:345, height:155, transparent: true, skipTaskbar: true, frame: false});

  //win.show();

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'static/html/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //win.webContents.openDevTools();

  win.on('closed', () => {
    console.log("closing the window");
    win = null;
  });
};

app.on('ready', startHandler);
