const mongoose = require("mongoose");

let instance = null;

class Database {
  constructor() {
    this.mongoConnection = null;
    if (!instance) instance = this;

    return instance;
  }

  async connect(options) {
    try {
      console.log("connecting");
      let db = await mongoose.connect(options.CONNECTION_STRING);

      this.mongoConnection = db;
      console.log("connected");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
}

module.exports = Database;
