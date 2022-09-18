const {app, BrowserWindow} = require('electron');
// 파일 상단에 Node.js 'Path'모듈 포함
const path = require('path');

// 기존 CreateWindow () 함수를 수정하십시오
function createWindow(){
const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js')
  }
})
win.loadFile('index.html',)
}

app.whenReady().then(()=>{
  createWindow();
})

app.on('window-all-closed', function(){
  if(process.platform !== 'darwin') app.quit()
})