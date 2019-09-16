const settings = require('./settings');
const mongoose = require("mongoose");

async function db(db, func) {
  try {
    await mongoose.connect(settings.mongo + db + "?authSource=admin", 
    { 
      useNewUrlParser: true,
      useCreateIndex: true
    });
  } catch (e) {
    return console.log(e);
  }
    
  let res = await func();
  mongoose.disconnect();

  return res;
} 

module.exports = db;