import Joi from "joi";

const userRegister = Joi.object({
  firstName: Joi.string().required().messages({
    "string.empty": "Please entry a first name",
  }),
  lastName: Joi.string().required().messages({
    "string.empty": "Please entry a last name",
  }),
  phone: Joi.string().required().messages({
    "string.empty": "Please entry a phone number",
  }),
  address: Joi.string().required().messages({
    "string.empty": "Please entry a address",
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "Please entry a E-mail",
  }),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/)
    .messages({
      "string.empty": "Please entry a password",
      "string.pattern.base":
        "Password must contain a-z A-Z 0-9 and must be at least 6 characters.",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.empty": "Please enter a Confirm Password",
    "any.only": "Password and Confirm Password is not match",
  }),
});

const validateRegister = (input) => {
  const { error } = userRegister.validate(input, {
    abortEarly: false,
  });
  if (error) {
    const formError = error.details.reduce((prev, curr) => {
      prev[curr.path[0]] = curr.message;
      return prev;
    }, {});

    return formError;
  }
  return null;
};

export default validateRegister;
