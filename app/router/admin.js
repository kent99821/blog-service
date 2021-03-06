module.exports = app =>{
    const {router, controller} = app;
    // let adminauth = app.middleware.adminauth();
    router.post('/admin/checkOpenId', controller.admin.main.checkLogin);
    router.get('/admin/getTypeInfo',controller.admin.main.getTypeInfo);
    router.post('/admin/addArticle',controller.admin.main.addArticle);
    router.post('/admin/updateArticle',controller.admin.main.updateArticle);
    router.get('/admin/getArticleList',controller.admin.main.getArticleList);
    router.post('/admin/delArticle',controller.admin.main.delArticle);
    router.post('/admin/getArticleById',controller.admin.main.getArticleById);
    router.post('/admin/addTypeInfo',controller.admin.main.addTypeInfo);
    router.post('/admin/getTypeInfoById',controller.admin.main.getTypeInfoById);
    router.post('/admin/updateTypeInfo',controller.admin.main.updateTypeInfo);
    router.post('/admin/delTypeInfo',controller.admin.main.delTypeInfo);


}
