const express = require('express');
const router = express.Router();
const upload = require("./../config/multerConfig")
const {
  getFiles,
  getFile,
  createFile,
  updateFile,
  deleteFile,
} = require("./../controllers/files");


router.post("/", upload.single("file"), createFile);
router.get("/", getFiles);
router.get("/:fileId", getFile);
// router.put("/:fileId", updateFile);
router.delete("/:fileId", deleteFile);

module.exports = router;
