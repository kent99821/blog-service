module.exports = app =>{
    const {router, controller} = app;
    router.get('/default/index', controller.default.home.index);
    router.get('/default/articlelist', controller.default.home.getArticleList);
    router.get('/default/detailed', controller.default.home.getArticleById);
    router.get('/default/type', controller.default.home.getTypeInfo);
}