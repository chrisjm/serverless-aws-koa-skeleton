class HelloController {
  post(ctx, next) {
    ctx.status = 201;
    ctx.body = {
      status: true,
      message: 'Hello world! 👋'
    };

    return next();
  }

  get(ctx, next) {
    ctx.status = 200;
    ctx.body = {
      status: true,
      message: 'Hello World 👋'
    };

    return next();
  }
}

module.exports = new HelloController();
