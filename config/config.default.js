/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1630498341932_4963';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  exports.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['http://127.0.0.1:7002','http://127.0.0.1:3001','http://127.0.0.1:3000','http://127.0.0.1:7001']
  };
  config.cors = {
    origin: '*',
    credentials: true,  //允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  return {
    ...config,
    ...userConfig,
  };
};

