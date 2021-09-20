module.exports = app =>{
    const {router, controller} = app;
    let adminauth = app.middleware.adminauth();
    router.get('/admin/index', controller.admin.main.index);
    router.post('/admin/checkOpenId', controller.admin.main.checkLogin);
    router.get('/admin/getTypeInfo',adminauth,controller.admin.main.getTypeInfo);
    router.post('/admin/addArticle',adminauth,controller.admin.main.addArticle);
}