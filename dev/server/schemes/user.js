const userScheme = {
  name: {
    type: String, 
    default: 'user'
  },
  age: {
    type: Number,
    default: ''
  },
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
};

module.exports = userScheme;