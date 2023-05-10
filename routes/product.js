const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//multer config;
const storage = multer.diskStorage({
  destination: "../images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

const {
  getURLbasedOnUser,
  getURLbasedOnId,
  getTopRatedProduct,
  getSpecialProduct,
  getBestProduct,
} = require("../controllers/product");

router.route("/all_product").get(upload.single('image'), getURLbasedOnUser);
router.route("/product_id/:id").get(getURLbasedOnId);
router.route("/top_product").get(getTopRatedProduct);
router.route("/special_product").get(getSpecialProduct);
router.route("/best_product").get(getBestProduct);

module.exports = router;
