module.exports = {
    loginRequest: {
        userName: {
            type: 'string',
            required: true,
            description: '用户名',
            example: 'admin'
        },
        password: {
            type: 'string',
            required: true,
            description: '密码',
            example: '123',
        }
    },
    addRequest: {
        type_id: {
            type: 'integer',
            require: true,
            description: '文章类别ID',
            example: 1,
        },
        title: {
            type: 'string',
            require: true,
            description: '文章标题',
            example: '标题',
        },
        article_content: {
            type: 'string',
            require: true,
            description: '文章内容',
            example: '内容',
        },
        introduce: {
            type: 'string',
            require: true,
            description: '文章简介',
            example: '简介',
        },
        view_count: {
            type: 'integer',
            require: true,
            description: '浏览量',
            example: 0,
        }


    },
    updateRequest: {
        type_id: {
            type: 'integer',
            require: true,
            description: '文章类别ID',
            example: 1,
        },
        title: {
            type: 'string',
            require: true,
            description: '文章标题',
            example: '标题',
        },
        article_content: {
            type: 'string',
            require: true,
            description: '文章内容',
            example: '内容',
        },
        introduce: {
            type: 'string',
            require: true,
            description: '文章简介',
            example: '简介',
        },
        id: {
            type: 'integer',
            require: true,
            description: '文章ID',
            example: 1,
        }


    },
    drRequest:{
        id: {
            type: 'integer',
            require: true,
            description: '文章ID',
            example: 1,
        }
    },
}