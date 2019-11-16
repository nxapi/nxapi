const Joi = require('@hapi/joi');
module.exports = {
'e4fQW': {
  path: '/v1/hello',
  request: Joi.object({
  arr: Joi.array().items(Joi.object({
  tt: Joi.number().max(1).description('ddd').example(1),
  mmm: Joi.string(),
})).description('ddda').required(),
  hello: Joi.object({
  tt: Joi.number().max(1).description('ddd').example(1),
  mmm: Joi.string(),
}).required(),
  tt: Joi.number().max(1).description('ddd').example(1),
  mmm: Joi.string(),
  b: Joi.boolean().example(true),
}),
  response: Joi.array().items(Joi.number())
},
'2JWZZB': {
  path: '/v1/post',
  request: Joi.object({
  arr: Joi.array().items(Joi.object({
  tt: Joi.number().max(1).description('ddd').example(1),
  mmm: Joi.string(),
})).description('ddda').required(),
  hello: Joi.object({
  tt: Joi.number().max(1).description('ddd').example(1),
  mmm: Joi.string(),
}).required(),
  tt: Joi.number().max(1).description('ddd').example(1),
  mmm: Joi.string(),
  b: Joi.boolean().example(true),
}),
  response: Joi.object({
  tt: Joi.number().max(1).description('ddd'),
})
},
}