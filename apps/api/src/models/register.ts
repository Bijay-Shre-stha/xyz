import Joi from "joi";

const date = new Date();
const dobLimit = date.setFullYear(date.getFullYear() - 18);

const Register = Joi.object({
  name: Joi.string()
    .regex(/^[A-Za-z ]+$/)
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .required(),
  confirmPassword: Joi.ref("password"),
  dob: Joi.date().greater("1974-1-1").less(dobLimit).required(),
  phone: Joi.string()
    .regex(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
    )
    .required(),
  github: Joi.string().uri().allow(""),
  linkedin: Joi.string().uri().allow(""),
});

export default Register;
