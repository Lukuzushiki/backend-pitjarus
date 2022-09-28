const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getProduct(page = 1) {
  const rows = await db.query(`SELECT * FROM product`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getProductBrand(page = 1) {
  const rows = await db.query(`SELECT * FROM product_brand`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getReportProduct(page = 1) {
  const rows = await db.query(`SELECT * FROM report_product`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getStore(page = 1) {
  const rows = await db.query(`SELECT * FROM store`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getStoreAccount(page = 1) {
  const rows = await db.query(`SELECT * FROM store_account`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function getStoreArea(page = 1) {
  const rows = await db.query(`SELECT * FROM store_area`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

module.exports = {
  getProduct,
  getProductBrand,
  getReportProduct,
  getStore,
  getStoreAccount,
  getStoreArea,
};
