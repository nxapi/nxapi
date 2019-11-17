import { compilerCtrlToDsl } from '../';
import { relativeCtrlPath, plugins, relativeOutputPath } from './config';

export default () => {
  const ctrlDsls = compilerCtrlToDsl(relativeCtrlPath);
  plugins.forEach((plugin: any) => {
    require(plugin).default(ctrlDsls, relativeOutputPath);
  });
};