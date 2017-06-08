const {utils: Cu} = Components;
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyModuleGetter(this, "JSONFile", "resource://gre/modules/JSONFile.jsm");
XPCOMUtils.defineLazyModuleGetter(this, "Log", "resource://gre/modules/Log.jsm");

this.install = function() {};

this.startup = async function() {
  const file = new JSONFile({path: 'resource://jsonfile-example/data.json'});
  await file.load();

  const logger = Log.repository.getLogger('jsonfile-example');
  logger.addAppender(new Log.ConsoleAppender(new Log.BasicFormatter()));
  logger.level = 0;
  logger.debug('Loaded JSON file');
  logger.debug(file.data);
};

this.shutdown = function() {};

this.uninstall = function() {};
