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
  exports.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '博客前端展示与后台管理接口文档',
      description: 'egg搭建的博客接口',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      APIKeyHeader: {
        type: 'apiKey',
        name: 'token',
        in: 'header',
      }
    },
    enableSecurity: true,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  };
  config.security = {
    csrf:{
      enable: false
    },
    domainWhiteList:['http://127.0.0.1:3001','http://127.0.0.1:3000','http://127.0.0.1:7001']
  }

  config.cors = {
    origin: ctx => ctx.get('origin'),
    credentials: true,  //允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  //jwt 鉴权密钥
  config.jwt = {
    secret: '998210', // token的加密的密钥,自己随便设置
  };

  return {
    ...config,
    ...userConfig,
  };
};

