module.exports = app =>{
    const {router, controller} = app;
    router.get('/default/index',controller.default.home.index);
    router.get('/default/ArticleList',controller.default.home.getArticleList);
}