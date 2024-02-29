const express = require("express");
const router = express.Router();
const bookmarkController = require("../controller/bookmark")

router.post("/add-wish-list", bookmarkController.postBookmark);
router.delete("/delete-wish-list", bookmarkController.deleteBookmark);
router.get("/user-wish-list", bookmarkController.oneUserBookmark);


module.exports = router;
