import { compilerCtrlToDsl } from '../';
import { relativeCtrlPath, plugins, relativeOutputPath } from './config';

export default () => {
  const ctrlDsls = compilerCtrlToDsl(relativeCtrlPath);
  plugins.forEach((plugin: any) => {
    const pluginIns = typeof plugin === 'string' ? require(plugin) : plugin;
    if (pluginIns.default) pluginIns.default(ctrlDsls, relativeOutputPath);
    else pluginIns(ctrlDsls, relativeOutputPath);
  });
};
