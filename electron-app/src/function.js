const {ipcRenderer} = require('electron')
const ipc = ipcRenderer;

let btnMin = document.getElementById('min')
let btnMax = document.getElementById('max')
let btnClose = document.getElementById('close')

btnMin.addEventListener('click', ()=>{ 
  ipc.send('minimizeApp')
})

btnMax.addEventListener('click', ()=>{ 
  ipc.send('maximizeApp')
})

btnClose.addEventListener('click', ()=>{ 
  ipc.send('closeApp')
})