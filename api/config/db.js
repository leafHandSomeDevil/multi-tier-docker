const mongoose = require("mongoose");

const connectionString = "mongodb://mongo:27017/multi-tier-docker-db";

const db = async () => {
  const connection = await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifieldTopology: true,
  });

  console.log(`MongoDB connect: ${connection.connection.host}`);
};

module.exports = db;
