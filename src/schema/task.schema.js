import joi from 'joi'

export const taskSchema = joi.object({
  title: joi.string().required(),
  description: joi.string()
})
