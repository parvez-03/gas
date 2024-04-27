// const mongoose = require("mongoose");
// // mongoose.set("strictQuery", false);
// require("dotenv").config()

// var mongoURL = process.env.MONGOURL;

// mongoose.connect(mongoURL, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   // useFindAndModify: false,
// });

// var connection = mongoose.connection;

// connection.on("error", () => {
//   console.log("Mongo DB connection Failed");
// });

// connection.on("connected", () => {
//   console.log("Mongo DB connection Successfull");
// });

// module.exports = mongoose;




const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("Db connection successful");
  } catch (error) {
    console.log("Issue in connectivity");
    console.error(error.message);
    process.exit(1);
  }
};
