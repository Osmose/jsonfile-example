const {utils: Cu} = Components;
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyModuleGetter(this, "OS", "resource://gre/modules/osfile.jsm");
XPCOMUtils.defineLazyModuleGetter(this, "Log", "resource://gre/modules/Log.jsm");

this.install = function() {};

this.startup = async function() {
  const logger = Log.repository.getLogger('jsonfile-example');
  logger.addAppender(new Log.ConsoleAppender(new Log.BasicFormatter()));
  logger.level = 0;

  logger.debug('Loading JSON file');
  try {
    const bytes = await OS.File.read('resource://jsonfile-example/data.json', {});

    logger.debug('Parsing JSON file');
    const decoder = new TextDecoder();
    const data = JSON.parse(decoder.decode(bytes));

    logger.debug('Loaded JSON file');
    logger.debug(data);
  } catch (error) {
    logger.error('Failed to load JSON file: ${error.message}');
    logger.error(error);
  }
};

this.shutdown = function() {};

this.uninstall = function() {};
