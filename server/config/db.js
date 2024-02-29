const mongoose = require("mongoose");
try {
  mongoose.connect(
    "mongodb+srv://mi02code:MKsadam2002%40@cluster0.a5ml9sj.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
