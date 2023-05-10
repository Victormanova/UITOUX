const db = require('../db/db.js');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

//get all product by all  (Checked by postman) 
const getURLbasedOnUser = (req,res) => {
    try {
        let data = "SELECT * FROM `product`";
        db.query(data, async (err, resultData) => {
          if (err) {
            throw err;
          } else {
            for (let i = 0; i < resultData.length; i++) {
              if (resultData[i].FILE_NAME !== null) {
                let imagePath = path.join(resultData[i].FILE_PATH, resultData[i].FILE_NAME);
                imagePath = imagePath.slice(1);
                console.log(imagePath, "sdhbfhghjhgghjkfbsdf");
      
                try {
                  const image = await fs.promises.readFile(imagePath);
                  const compressedImage = await sharp(image)
                    .resize(800, 600)
                    .jpeg({ quality: 80 })
                    .toBuffer();
        
                  let imageurl = compressedImage.toString('base64');
                  let contentType = 'image/jpg';
                  if (resultData[i].FILE_NAME.endsWith('.PNG')) {
                    contentType = 'image/png';
                  }
                  resultData[i].FILE_NAME = "data:" + contentType + ";base64, " + imageurl;
                } catch (err) {
                  console.error("Error while reading image file:", err);
                }
              }
            }
      
            res.status(200).json(resultData);
          }
        });
      } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' });
      }
      
}



//Get product by id (Postman checked);
const getURLbasedOnId = (req,res) => {
    try {
        let URL = req.params.id;
        let data = "SELECT * FROM `product` WHERE ID=?"
        db.query(data, URL, async(err, resultData) => {
            if (err) {
                throw err;
              } else {
                for (let i = 0; i < resultData.length; i++) {
                  if (resultData[i].FILE_NAME !== null) {
                    let imagePath = path.join(resultData[i].FILE_PATH, resultData[i].FILE_NAME);
                    imagePath = imagePath.slice(1);
                    console.log(imagePath, "sdhbfhghjhgghjkfbsdf");
          
                    try {
                      const image = await fs.promises.readFile(imagePath);
                      const compressedImage = await sharp(image)
                        .resize(800, 600)
                        .jpeg({ quality: 80 })
                        .toBuffer();
            
                      let imageurl = compressedImage.toString('base64');
                      let contentType = 'image/jpg';
                      if (resultData[i].FILE_NAME.endsWith('.PNG')) {
                        contentType = 'image/png';
                      }
                      resultData[i].FILE_NAME = "data:" + contentType + ";base64, " + imageurl;
                    } catch (err) {
                      console.error("Error while reading image file:", err);
                    }
                  }
                }
          
                res.status(200).json(resultData);
              }
        })

    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}


//Get all  Top rating products (Postman Check);
const getTopRatedProduct = (req,res) => {
    try {
        db.query('SELECT * FROM `product` WHERE `IS_TOP_RATING`=1', async(err, resultData) => {
            if (err) {
                throw err;
              } else {
                for (let i = 0; i < resultData.length; i++) {
                  if (resultData[i].FILE_NAME !== null) {
                    let imagePath = path.join(resultData[i].FILE_PATH, resultData[i].FILE_NAME);
                    imagePath = imagePath.slice(1);
                    console.log(imagePath, "sdhbfhghjhgghjkfbsdf");
          
                    try {
                      const image = await fs.promises.readFile(imagePath);
                      const compressedImage = await sharp(image)
                        .resize(800, 600)
                        .jpeg({ quality: 80 })
                        .toBuffer();
            
                      let imageurl = compressedImage.toString('base64');
                      let contentType = 'image/jpg';
                      if (resultData[i].FILE_NAME.endsWith('.PNG')) {
                        contentType = 'image/png';
                      }
                      resultData[i].FILE_NAME = "data:" + contentType + ";base64, " + imageurl;
                    } catch (err) {
                      console.error("Error while reading image file:", err);
                    }
                  }
                }
          
                res.status(200).json(resultData);
              }
        })

    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}


//Special offers (Postman Checked);
const getSpecialProduct = (req,res) => {
    try {
        db.query('SELECT * FROM `product` WHERE `IS_SPECIAL`=1', async(err, resultData) => {
            if (err) {
                throw err;
              } else {
                for (let i = 0; i < resultData.length; i++) {
                  if (resultData[i].FILE_NAME !== null) {
                    let imagePath = path.join(resultData[i].FILE_PATH, resultData[i].FILE_NAME);
                    imagePath = imagePath.slice(1);
                    console.log(imagePath, "sdhbfhghjhgghjkfbsdf");
          
                    try {
                      const image = await fs.promises.readFile(imagePath);
                      const compressedImage = await sharp(image)
                        .resize(800, 600)
                        .jpeg({ quality: 80 })
                        .toBuffer();
            
                      let imageurl = compressedImage.toString('base64');
                      let contentType = 'image/jpg';
                      if (resultData[i].FILE_NAME.endsWith('.PNG')) {
                        contentType = 'image/png';
                      }
                      resultData[i].FILE_NAME = "data:" + contentType + ";base64, " + imageurl;
                    } catch (err) {
                      console.error("Error while reading image file:", err);
                    }
                  }
                }
          
                res.status(200).json(resultData);
              }
        })

    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}


const getBestProduct = (req,res) => {
    try {
        db.query('SELECT * FROM `product` WHERE `IS_BEST`=1',async(err, resultData) => {
            if (err) {
                throw err;
              } else {
                for (let i = 0; i < resultData.length; i++) {
                  if (resultData[i].FILE_NAME !== null) {
                    let imagePath = path.join(resultData[i].FILE_PATH, resultData[i].FILE_NAME);
                    imagePath = imagePath.slice(1);
                    console.log(imagePath, "sdhbfhghjhgghjkfbsdf");
          
                    try {
                      const image = await fs.promises.readFile(imagePath);
                      const compressedImage = await sharp(image)
                        .resize(800, 600)
                        .jpeg({ quality: 80 })
                        .toBuffer();
            
                      let imageurl = compressedImage.toString('base64');
                      let contentType = 'image/jpg';
                      if (resultData[i].FILE_NAME.endsWith('.PNG')) {
                        contentType = 'image/png';
                      }
                      resultData[i].FILE_NAME = "data:" + contentType + ";base64, " + imageurl;
                    } catch (err) {
                      console.error("Error while reading image file:", err);
                    }
                  }
                }
          
                res.status(200).json(resultData);
              }
        })

    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
    }
}


const getFavProduct = (req,res) => {
  try {
      db.query('SELECT * FROM `product` WHERE `IS_FAV`=1',async(err, resultData) => {
          if (err) {
              throw err;
            } else {
              for (let i = 0; i < resultData.length; i++) {
                if (resultData[i].FILE_NAME !== null) {
                  let imagePath = path.join(resultData[i].FILE_PATH, resultData[i].FILE_NAME);
                  imagePath = imagePath.slice(1);
                  console.log(imagePath, "sdhbfhghjhgghjkfbsdf");
        
                  try {
                    const image = await fs.promises.readFile(imagePath);
                    const compressedImage = await sharp(image)
                      .resize(800, 600)
                      .jpeg({ quality: 80 })
                      .toBuffer();
          
                    let imageurl = compressedImage.toString('base64');
                    let contentType = 'image/jpg';
                    if (resultData[i].FILE_NAME.endsWith('.PNG')) {
                      contentType = 'image/png';
                    }
                    resultData[i].FILE_NAME = "data:" + contentType + ";base64, " + imageurl;
                  } catch (err) {
                    console.error("Error while reading image file:", err);
                  }
                }
              }
        
              res.status(200).json(resultData);
            }
      })

  } catch (error) {
      res.status(500).json({ Message: 'Server Issue or Something Went Wrong' })
  }
}


module.exports = {
    getURLbasedOnUser,
    getURLbasedOnId,
    getTopRatedProduct,
    getSpecialProduct,
    getBestProduct,
    getFavProduct
}