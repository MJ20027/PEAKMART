

const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Import Router
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const productRouter = require("./routes/products");
const brainTreeRouter = require("./routes/braintree");
const orderRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const customizeRouter = require("./routes/customize");
const bookmarkRouter = require("./routes/bookmark")
// Import Auth middleware for check user login or not~
const { loginCheck } = require("./middleware/auth");
const CreateAllFolder = require("./config/uploadFolderCreateScript");

/* Create All Uploads Folder if not exists | For Uploading Images */
CreateAllFolder();

// Database Connection
// mongoose.connect("mongodb://localhost:27017")

// mongoose
//   .connect(
//     "mongodb+srv://mi02code:MKsadam2002%40@cluster0.a5ml9sj.mongodb.net/?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     }
//   )
//   .then(() =>
//     console.log(
//       "==============Mongodb Database Connected Successfully=============="
//     )
//   )
//   .catch((err) => console.log("Database Not Connected !!!"));

const connectDB = async () => {
  try {
    // await mongoose.connect();
   mongoose.connect(
      process.env.DATABASE,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
          }
    );

    console.log("database is connected successfully!");
  } catch (err) {
    console.log(err);
  }
};



// Middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api", brainTreeRouter);
app.use("/api/order", orderRouter);
app.use("/api/customize", customizeRouter);
app.use("/api/wishlist", bookmarkRouter);

// Run Server
const PORT =8000;
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on ", PORT);
});
