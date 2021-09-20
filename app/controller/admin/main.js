'use strict';
const Controller = require('egg').Controller;
class MainController extends Controller {
    async index() {
      const { ctx } = this;
      ctx.body = 'api接口';
    }
    // 登录
    async checkLogin(){
        let userName = this.ctx.request.body.userName;
        let password = this.ctx.request.body.password;
        const sql = "SELECT userName FROM admin_user WHERE userName ='"+userName+"' AND password = '"+password+"'";
        const result =  await this.app.mysql.query(sql);
        
        if(result.length > 0){
            // 登录成功 进行session 缓存
            let openId = new Date().getTime();
            this.ctx.session.openId=openId;
            this.ctx.body = {data:{'code':200,'msg':'登录成功',openId:openId}};
        }else{
            this.ctx.body = {data:{'code':404,'msg':'登录失败'}};
        }
    }
    //后台文章获取分类
    async getTypeInfo(){
        let resType = await this.app.mysql.select('type');
        this.ctx.body = {data:resType,code:200};
    }
    // 后台添加文章
    async addArticle(){
        let tempArticle = this.ctx.request.body;
        const result = await this.app.mysql.insert('article',tempArticle);
        const insertSucess = result.affectedRows === 1;
        const insertId = result.insertId;
        
        this.ctx.body = {
            isSuccess:insertSucess,
            insertId:insertId,
            code:200
        }
    }
    // 后台修改文章
    async updateArticle(){
        let tempArticle = this.ctx.request.body;
        const result = await this.app.mysql.update('article',tempArticle);
        const updateSucess = result.affectedRows === 1;
        this.ctx.body = {
            isSuccess:updateSucess
        }
    }
    
    
  
  }
  
  module.exports =MainController;