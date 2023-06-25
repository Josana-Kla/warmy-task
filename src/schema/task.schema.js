import joi from 'joi';

const taskSchema = joi.object({
  title: joi.string().required(),
  description: joi.string(),
  status: joi.boolean().default(false),
});

export default taskSchema;
