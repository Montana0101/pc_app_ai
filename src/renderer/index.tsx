import { createRoot } from 'react-dom/client';
import App from './App';

// const { ipcRenderer } = require('electron');、
// ipcRenderer.on('message', function(event, text) {
//  console.log(text);
// });

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App />);

// calling IPC exposed from preload script
// window.electron.ipcRenderer.once('ipc-example', (arg) => {
//   // eslint-disable-next-line no-console
//   console.log(arg);
// });

// window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

// window.electron.ipcRenderer.on('ipc-example',function(event,text){
//   console.log(text)
// })