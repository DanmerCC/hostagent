const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

function createWindow () {
  // Crea la ventana del navegador.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation:false
    }
  })

  // y carga el index.html de la aplicación.
  win.loadFile('index.html')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)