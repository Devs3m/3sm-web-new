/**
 * Sales Summary API - Transaction to insert into salessummary + salesdetail
 * Add this route to your Node.js backend (e.g. Express)
 * 
 * Tables: possales.salessummary, possales.salesdetail
 * salesdetail.invoicenoid references salessummary.invoiceno
 */

const express = require('express');
const { Pool } = require('pg'); // PostgreSQL - use mysql2/promise for MySQL

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'possales',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

/**
 * POST /salessummary/save
 * 
 * Request body:
 * {
 *   invoiceno: number,
 *   invdate: date,
 *   customerid: number,
 *   customername: string,
 *   tgrossamount: number,
 *   tdisaper: number,
 *   tdisamount: number,
 *   tgstamount: number,
 *   tsgstamount: number,
 *   tcgstamount: number,
 *   grandtotal: number,
 *   paymenttype: string,
 *   paymentstatus: boolean,
 *   accountid: number,
 *   instanceid: number,
 *   createdby: number,
 *   updatedby: number,
 *   isactive: boolean,
 *   items: [
 *     { productid, productname, salehsn, saleqty, salemrp, saledisper, salegstper, saleamount,
 *       salegrossamount, saltotaldisc, salesubtotal, saletotalcgst, saletotalsgst, saletotalgst, salegrandtotal }
 *   ]
 * }
 */
async function saveSalesSummaryWithDetails(req, res) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const {
      invoiceno,
      invdate,
      customerid,
      customername,
      tgrossamount,
      tdisaper,
      tdisamount,
      tgstamount,
      tsgstamount,
      tcgstamount,
      grandtotal,
      paymenttype,
      paymentstatus,
      accountid,
      instanceid,
      createdby,
      updatedby,
      isactive = true,
      items = [],
    } = req.body;

    const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // 1. Insert into salessummary
    await client.query(
      `INSERT INTO possales.salessummary (
        invoiceno, invdate, customerid, customername,
        tgrossamount, tdisaper, tdisamount, tgstamount, tsgstamount, tcgstamount,
        grandtotal, paymenttype, paymentstatus, accountid, instanceid,
        createdby, updatedby, createddate, updateddate, isactive
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)`,
      [
        invoiceno,
        invdate,
        customerid,
        customername || null,
        tgrossamount,
        tdisaper ?? null,
        tdisamount,
        tgstamount,
        tsgstamount,
        tcgstamount,
        grandtotal,
        paymenttype || null,
        paymentstatus ?? null,
        accountid,
        instanceid,
        createdby,
        updatedby,
        now,
        now,
        isactive,
      ]
    );

    // 2. Insert into salesdetail for each item
    for (const item of items) {
      await client.query(
        `INSERT INTO possales.salesdetail (
          invoicenoid, productid, productname, salehsn, saleqty, salemrp, saledisper, salegstper,
          saleamount, salegrossamount, saltotaldisc, salesubtotal, saletotalcgst, saletotalsgst, saletotalgst, salegrandtotal
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
        [
          invoiceno, // invoicenoid links to salessummary.invoiceno
          item.productid,
          item.productname || '',
          item.salehsn || null,
          item.saleqty,
          item.salemrp || '0',
          item.saledisper ?? null,
          item.salegstper,
          item.saleamount,
          item.salegrossamount,
          item.saltotaldisc ?? null,
          item.salesubtotal,
          item.saletotalcgst,
          item.saletotalsgst,
          item.saletotalgst,
          item.salegrandtotal,
        ]
      );
    }

    await client.query('COMMIT');
    res.json({ success: true, invoiceno });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Transaction error:', error);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
}

// Example Express setup
// const app = express();
// app.use(express.json());
// app.post('/salessummary/save', saveSalesSummaryWithDetails);

module.exports = { saveSalesSummaryWithDetails };
