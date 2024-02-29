const bookmarkModel = require("../models/bookmark");


class Bookmark {
  async postBookmark(req, res) {
    let { pId, uId } = req.body;
    try {
      const updatedBookmark = await bookmarkModel.findOneAndUpdate(
        { user: uId },
        { $addToSet: { allProduct: { id: pId } } },
        { new: true, upsert: true }
      );
      await updatedBookmark.save();
      return res.json({ success: "Bookmark updated successfully" });
    } catch (err) {
      return res.status(404).json({ error: "err" });
    }
  }

  async deleteBookmark(req, res) {
    let { pId, uId } = req.body;
    try {
      const updatedBookmark = await bookmarkModel.findOneAndUpdate(
        { user: uId },
        { $pull: { allProduct: { id: pId } } },
        { new: true, upsert: true }
      );
      await updatedBookmark.save();
      return res.json({ success: "Deleted successfully" });
    } catch (err) {
      return res.status(404).json({ error: "err" });
    }
  }

  async oneUserBookmark(req, res) {
    let { uId } = req.body;
    try {
      const product = await bookmarkModel.findOne(
        {user:uId}
      )
      const pIds = product.allProduct.map((product) => product.id);
      return res.json(pIds);
    } catch (err) {
      return res.status(404).json({ error: "err" });
    }
  }

}

const bookmarkController = new Bookmark();
module.exports = bookmarkController;
