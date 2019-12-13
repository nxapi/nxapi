#!/usr/bin/env node
import build from './build';
const program = require('commander');
const { version } = require('../../package.json');

program.version(version).usage('<command> [options]');

program
  .command('build')
  .option('-s, --source <s>', 'service path')
  .option('-t, --target <t>', 'output path')
  .description('build service')
  .action(async () => {
    // console.log(program.path);
    build(program.source, program.target);
  });

program.arguments('<command>').action(() => {
  program.outputHelp();
});

program.parse(process.argv);
