const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const bookmarkSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "users",
      required: true,
    },
    allProduct: [
      {
        id: { type: ObjectId, ref: "products" }
      }
    ]
  },
  { timestamps: true }
);

const bookmarkModel = mongoose.model("Bookmark", bookmarkSchema);
module.exports = bookmarkModel;
