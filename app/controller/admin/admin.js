'use strict';

const Controller = require('egg').Controller;

class adminController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'api接口';
  }

}

module.exports =adminController;
