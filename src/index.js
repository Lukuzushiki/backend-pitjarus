const products = require("./services/index");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var port = process.env.PORT || 8090;
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/products").get(async function (req, res, next) {
  try {
    res.json(await products.getProduct(req.query.page));
  } catch (err) {
    console.error(`Error while getting Products `, err.message);
    next(err);
  }
});

router.route("/products-brand").get(async function (req, res, next) {
  try {
    res.json(await products.getProductBrand(req.query.page));
  } catch (err) {
    console.error(`Error while getting Products Brand `, err.message);
    next(err);
  }
});

router.route("/report-products").get(async function (req, res, next) {
  try {
    res.json(await products.getReportProduct(req.query.page));
  } catch (err) {
    console.error(`Error while getting Report Products `, err.message);
    next(err);
  }
});

router.route("/store").get(async function (req, res, next) {
  try {
    res.json(await products.getStore(req.query.page));
  } catch (err) {
    console.error(`Error while getting Store `, err.message);
    next(err);
  }
});

router.route("/store-account").get(async function (req, res, next) {
  try {
    res.json(await products.getStoreAccount(req.query.page));
  } catch (err) {
    console.error(`Error while getting Store Account `, err.message);
    next(err);
  }
});

router.route("/store-area").get(async function (req, res, next) {
  try {
    res.json(await products.getStoreArea(req.query.page));
  } catch (err) {
    console.error(`Error while getting Store Area `, err.message);
    next(err);
  }
});

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
