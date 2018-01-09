//console.log("Hola");

const {app, BrowserWindow} = require('electron');

app.on('ready', () =>{
  let mainwindow = new BrowserWindow();

  mainwindow.loadURL(`file://${__dirname}/index.html`);

  mainwindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();

    mainwindow.webContents.send('open-file', url);
  })
});
