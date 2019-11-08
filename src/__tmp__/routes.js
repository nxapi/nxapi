import TestController from '../controllers/test-controller';
const testController = new TestController();

module.exports = (router) => {

  router.get('/v1/hello', async (ctx, next) => {
    ctx.body = testController.ggg(ctx.request.query);
    await next();
  });
  
  router.post('/v1/post', async (ctx, next) => {
    ctx.body = testController.hhh(ctx.request.body);
    await next();
  });
  
}
