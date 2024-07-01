import yargs from 'yargs';

export class CommandHelper {
  static instance = yargs
    .usage('Usage: $0 <command> [options]')
    .demandCommand(1)
    .recommendCommands()
    .alias('h', 'help')
    .alias('v', 'version');
}
