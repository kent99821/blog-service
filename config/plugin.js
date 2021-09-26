'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.cors = {
  enable: true,
  package: 'egg-cors'
};
exports.jwt={
  enable:true,
  package:'egg-jwt'
}
// {app_root}/config/plugin.js
exports.swaggerdoc = {
  enable: true,
  package: 'egg-swagger-doc-feat',
};

