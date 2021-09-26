'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller 前端展示接口
 */
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi api ";
  }
      /**
     * @summary 获取文章列表
     * @description 用于博客展示
     * @router get /default/articlelist
     * @response 200 baseResponse 获取成功（DTO）
     */
  async getArticleList() {
    let sql = 'SELECT article.id as id, ' +
              'article.title as title,' + 
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(unix_timestamp(article.addTime), '%Y-%m-%d %H:%i:%s')  as addTime,"+
              'article.view_count as view_count,' +
              'type.typeName as typeName '+
              'FROM article LEFT JOIN type ON article.type_id = type.id';
    const results = await this.app.mysql.query(sql);
    this.ctx.body = {data:results};
    
  }
  /**
     * @summary 获取文章详细
     * @description 用于博客展示
     * @router get /default/detailed
     * @Request query string *id 文章id
     * @response 200 baseResponse 获取成功（DTO）
     */
  async getArticleById(){
    let id = this.ctx.query.id;
    let sql = 'SELECT article.id as id, ' +
    'article.title as title,' + 
    'article.introduce as introduce,' +
    'article.article_content as article_content,'+
    "FROM_UNIXTIME(unix_timestamp(article.addTime), '%Y-%m-%d %H:%i:%s')  as addTime,"+
    'article.view_count as view_count,' +
    'type.typeName as typeName,'+
    'type.id as typeId '+
    'FROM article LEFT JOIN type ON article.type_id = type.id '+
    'WHERE article.id='+ id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {data:result};
    
  }
    /**
     * @summary 获取类别信息
     * @description 用于博客展示
     * @router get /default/type
     * @response 200 baseResponse 获取成功（DTO）
     */
  // 得到类别名称信息
  async getTypeInfo (){
    const result = await this.app.mysql.select('type');
    this.ctx.body = {data:result};
  }
  // 根据类别id获取文章列表
      /**
     * @summary 获取类别文章
     * @description 用于博客展示
     * @router get /default/list
     * @Request query string *id 类别id
     * @response 200 baseResponse 获取成功（DTO）
     */
  async getListById (){
    let id = this.ctx.query.id;
    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+ 
    'article.introduce as introduce,'+
    "FROM_UNIXTIME(unix_timestamp(article.addTime), '%Y-%m-%d %H:%i:%s')  as addTime,"+
    'article.view_count as view_count,' +
    'type.typeName as typeName '+
    'FROM article LEFT JOIN type ON article.type_id = type.id '+
    'WHERE type_id='+ id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = {data:result};
  }

}

module.exports = HomeController;
