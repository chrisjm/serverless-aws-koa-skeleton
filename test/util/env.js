exports.env = {
  AWS_REGION: process.env.AWS_REGION || 'us-west-2',
  ENV: 'test'
};

Object.assign(process.env, exports.env);
