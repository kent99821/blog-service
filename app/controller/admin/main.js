'use strict';
const Controller = require('egg').Controller;
class MainController extends Controller {
    // 登录
    async checkLogin() {
        let userName = this.ctx.request.body.userName;
        let password = this.ctx.request.body.password;
        const sql = "SELECT userName FROM admin_user WHERE userName ='" + userName + "' AND password = '" + password + "'";
        const result = await this.app.mysql.query(sql);

        if (result.length > 0) {
            // 登录成功 进行session 缓存
            const token = this.ctx.app.jwt.sign({
                userName: userName,     //需要存储的Token数据
            }, this.ctx.app.config.jwt.secret, {   //app.config.jwt.secret是在配置里配置的密钥'123456'
                expiresIn: 60 * 60 * 24    //expiresIn是token过期时间
            });

            // this.ctx.session.openId = openId;
            this.ctx.body = { data: { 'code': 200, 'msg': '登录成功', token: token } };
        } else {
            this.ctx.body = { data: { 'code': -200, 'msg': '登录失败' } };
        }
    }
    //后台文章获取分类
    async getTypeInfo() {
        const token = this.ctx.request.header.token;
        try {
            this.ctx.app.jwt.verify(token, this.ctx.app.jwt.secret);
            let resType = await this.app.mysql.select('type');
            this.ctx.body = { data: resType, code: 200 };

        } catch (error) {
            this.ctx.body = { code: -200, msg: "token验证失败" }
        }

    }
    // 后台添加文章
    async addArticle() {
        const token = this.ctx.request.header.token;
        try {
            this.ctx.app.jwt.verify(token, this.ctx.app.jwt.secret);
            let tempArticle = this.ctx.request.body;
            const result = await this.app.mysql.insert('article', tempArticle);
            const insertSucess = result.affectedRows === 1;
            const insertId = result.insertId;

            this.ctx.body = {
                isSuccess: insertSucess,
                insertId: insertId,
                code: 200
            }

        } catch (error) {
            this.ctx.body = { code: -200, msg: "token验证失败" }
        }
    }
    // 后台修改文章
    async updateArticle() {

        const token = this.ctx.request.header.token;
        try {
            this.ctx.app.jwt.verify(token, this.ctx.app.jwt.secret);
            let tempArticle = this.ctx.request.body;
            const result = await this.app.mysql.update('article', tempArticle);
            const updateSucess = result.affectedRows === 1;
            this.ctx.body = {
                isSuccess: updateSucess
            }

        } catch (error) {
            this.ctx.body = { code: -200, msg: "token验证失败" }
        }
    }
    //后台获取文章列表
    async getArticleList() {

        const token = this.ctx.request.header.token;
        try {
            this.ctx.app.jwt.verify(token, this.ctx.app.jwt.secret);
            let sql = 'SELECT article.id as id, ' +
                'article.title as title,' +
                'article.introduce as introduce,' +
                "FROM_UNIXTIME(unix_timestamp(article.addTime), '%Y-%m-%d %H:%i:%s')  as addTime," +
                'article.view_count as view_count,' +
                'type.typeName as typeName ' +
                'FROM article LEFT JOIN type ON article.type_id = type.id ' +
                'ORDER BY article.id DESC';
            const resList = await this.app.mysql.query(sql);
            this.ctx.body = { list: resList, code: 200 };

        } catch (error) {
            this.ctx.body = { code: -200, msg: "token验证失败" }
        }


    }
    //后台删除文章
    async delArticle() {
        const token = this.ctx.request.header.token;
        try {
            this.ctx.app.jwt.verify(token, this.ctx.app.jwt.secret);
            let id = this.ctx.request.body.id;
            const res = await this.app.mysql.delete('article', { 'id': id });
            this.ctx.body = { data: res };

        } catch (error) {
            this.ctx.body = { code: -200, msg: "token验证失败" }
        }

    }
    // 根据文章ID获取文章
    async getArticleById() {
        const token = this.ctx.request.header.token;
        try {
            this.ctx.app.jwt.verify(token, this.ctx.app.jwt.secret);
            let id = this.ctx.request.body.id;
            let sql = 'SELECT article.id as id, ' +
                'article.title as title,' +
                'article.introduce as introduce,' +
                'article.article_content as article_content, ' +
                "FROM_UNIXTIME(unix_timestamp(article.addTime), '%Y-%m-%d %H:%i:%s')  as addTime," +
                'article.view_count as view_count,' +
                'type.typeName as typeName, ' +
                'type.id as typeId ' +
                'FROM article LEFT JOIN type ON article.type_id = type.id ' +
                'WHERE article.id=' + id;
            const result = await this.app.mysql.query(sql);
            this.ctx.body = { data: result };

        } catch (error) {
            this.ctx.body = { code: -200, msg: "token验证失败" }
        }
    }


}

module.exports = MainController;