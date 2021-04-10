import express from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)} `
    );
  },
});

const checkFileType = (file, cb) => {
  const fileTypes = /jpg|jpeg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);
  if (extName && mimeType) {
    return cb(null, true);
  } else {
    return cb("Images Only");
  }
};

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

const router = express.Router();
router.post("/", upload.single("image"), (req, res) => {
  return res.send(`${req.file.path}`);
});
export default router;
