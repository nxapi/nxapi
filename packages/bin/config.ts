import path from 'path';

let nxapirc;
try {
  nxapirc = global['nxapirc'] || require(path.resolve(process.cwd(), '.nxapirc'));
} catch (e) {
  nxapirc = {};
}
export const rootDir = nxapirc.rootDir || 'src';
export const ctrlDir = nxapirc.ctrlDir || 'controllers';
export const outputDir = nxapirc.outputDir || '__tmp__';
export const relativeCtrlPath = path.join(rootDir, ctrlDir);
export const relativeOutputPath = path.join(rootDir, ctrlDir);
export const plugins = nxapirc.plugins || [];
