'use strict';
const Controller = require('egg').Controller;
class MainController extends Controller {
    async index() {
      const { ctx } = this;
      ctx.body = 'api接口';
    }
    async checkLogin(){
        let userName = this.ctx.request.body.userName;
        let password = this.ctx.request.body.password;
        console.log(this.ctx.request.body);
        const sql = "SELECT userName FROM admin_user WHERE userName ='"+userName+"' AND password = '"+password+"'";
        const result =  await this.app.mysql.query(sql);
        
        if(result.length > 0){
            // 登录成功 进行session 缓存
            let openId = new Date().getTime();
            this.ctx.session.openId={'openId':openId};
            this.ctx.body = {data:{'code':200,'msg':'登录成功'}};
        }else{
            this.ctx.body = {data:{'code':404,'msg':'登录失败'}};
        }
    }
    
  
  }
  
  module.exports =MainController;