import chokidar from 'chokidar';
import path from 'path';
import { relativeCtrlPath } from './config';
import build from './build';

export default () => {
  const watcher = chokidar.watch(path.join(process.cwd(), relativeCtrlPath), { persistent: true, usePolling: true, });
  // watcher.on('add', (path: string) => { console.log(path); });
  watcher.on('change', (path: string) => {
    build();
  });
};