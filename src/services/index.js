const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getProduct(page = 1) {
  const rows = await db.query(
    `SELECT product_id, product_name, product_brand.brand_id, product_brand.brand_name FROM product INNER JOIN product_brand ON product.brand_id=product_brand.brand_id`
  );
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
  const rows =
    await db.query(`SELECT report_product.report_id, report_product.compliance, store.store_id, store.area_id, store_area.area_name, report_product.tanggal FROM report_product
INNER JOIN store ON report_product.store_id = store.store_id
INNER JOIN store_area ON store.area_id = store_area.area_id`);
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
