const mongoose = require("mongoose");

mongoose.connection.on("error", err => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

mongoose.set("debug", true);

exports.connect = () => {
  mongoose.connect(
    "mongodb+srv://dbUser:dbUserPassword@cluster0-xk9ew.mongodb.net/linkapi?retryWrites=true&w=majority",
    {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  return mongoose.connection;
};
