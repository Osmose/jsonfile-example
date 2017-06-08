const {utils: Cu} = Components;
Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.importGlobalProperties(['fetch']);

XPCOMUtils.defineLazyModuleGetter(this, "Log", "resource://gre/modules/Log.jsm");

this.install = function() {};

this.startup = async function() {
  const logger = Log.repository.getLogger('jsonfile-example');
  logger.addAppender(new Log.ConsoleAppender(new Log.BasicFormatter()));
  logger.level = 0;

  logger.debug('Loading JSON file');
  try {
    const response = await fetch('resource://jsonfile-example/data.json');
    const data = await response.json();
    logger.debug('Loaded JSON file');
    logger.debug(data);
  } catch (error) {
    logger.error(`Failed to load JSON file: ${error.message}`);
    logger.error(error);
  }
};

this.shutdown = function() {};

this.uninstall = function() {};
