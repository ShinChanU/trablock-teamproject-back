const Router = require('@koa/router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router;

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.put('/:id', postsCtrl.replace);
posts.patch('/:id', postsCtrl.update);
// list, read, remove말고 나머지는 Request Body가 필요

module.exports = posts;