const {utils: Cu} = Components;
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

XPCOMUtils.defineLazyModuleGetter(this, "Log", "resource://gre/modules/Log.jsm");

this.install = function() {};

this.startup = async function() {
  const logger = Log.repository.getLogger('bootstrap-addon-example');
  logger.addAppender(new Log.ConsoleAppender(new Log.BasicFormatter()));
  logger.level = 0;

  logger.debug('bootstrap-addon-example add-on has started up');
};

this.shutdown = function() {
  const logger = Log.repository.getLogger('bootstrap-addon-example');
  logger.addAppender(new Log.ConsoleAppender(new Log.BasicFormatter()));
  logger.level = 0;

  logger.debug('bootstrap-addon-example add-on is shutting down');
};

this.uninstall = function() {};
