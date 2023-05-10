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
  getFavProduct
} = require("../controllers/product");

router.route("/all_product").get(getURLbasedOnUser);//done
router.route("/product_id/:id").get(getURLbasedOnId);//done
router.route("/top_product").get(getTopRatedProduct);//done
router.route("/special_product").get(getSpecialProduct);//done
router.route("/best_product").get(getBestProduct);//done
router.route("/fav_product").get(getFavProduct);//done

module.exports = router;
