import path from 'path';

let nxapirc;
try {
  nxapirc = global['nxapirc'] || require(path.resolve(process.cwd(), '.nxapirc'));
} catch (e) {
  nxapirc = {};
}

export const relativeCtrlPath = nxapirc.relativeCtrlPath || 'src/controllers';
export const relativeOutputPath = nxapirc.relativeOutputPath || 'src/__tmp__';
export const plugins = nxapirc.plugins || [];
