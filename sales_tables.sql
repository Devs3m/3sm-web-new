-- =====================================================
-- Sales Summary Table (Header/Master Table)
-- Stores invoice-level information
-- =====================================================

CREATE TABLE IF NOT EXISTS sales_summary (
    salesid INT PRIMARY KEY AUTO_INCREMENT,
    invoiceno VARCHAR(50) NOT NULL UNIQUE,
    saledate DATE NOT NULL,
    
    -- Customer Information
    customerid INT NOT NULL,
    customername VARCHAR(255) NOT NULL,
    customeraddress TEXT,
    customergstin VARCHAR(50),
    
    -- Financial Summary
    subtotal DECIMAL(15, 2) DEFAULT 0.00,
    totalgst DECIMAL(15, 2) DEFAULT 0.00,
    grandtotal DECIMAL(15, 2) DEFAULT 0.00,
    
    -- Payment Information
    paymentmethod VARCHAR(50),
    paymentstatus VARCHAR(50),
    
    -- Additional Information
    notes TEXT,
    
    -- Status
    isactive BOOLEAN DEFAULT TRUE,
    
    -- Audit Fields
    createddate DATETIME DEFAULT CURRENT_TIMESTAMP,
    updateddate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdby INT,
    updatedby INT,
    
    -- Foreign Keys (if these tables exist)
    -- FOREIGN KEY (customerid) REFERENCES account(accountid),
    -- FOREIGN KEY (createdby) REFERENCES user(userid),
    -- FOREIGN KEY (updatedby) REFERENCES user(userid),
    
    -- Indexes
    INDEX idx_invoiceno (invoiceno),
    INDEX idx_saledate (saledate),
    INDEX idx_customerid (customerid),
    INDEX idx_isactive (isactive),
    INDEX idx_createddate (createddate)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Sales Details Table (Line Items Table)
-- Stores individual product items for each sale
-- =====================================================

CREATE TABLE IF NOT EXISTS sales_details (
    salesdetailid INT PRIMARY KEY AUTO_INCREMENT,
    salesid INT NOT NULL,
    
    -- Product Information
    productid INT,
    description VARCHAR(500) NOT NULL,
    hsnSac VARCHAR(50),
    
    -- Quantity and Pricing
    quantity DECIMAL(10, 2) NOT NULL DEFAULT 1.00,
    rate DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    gstPercent DECIMAL(5, 2) DEFAULT 0.00,
    amount DECIMAL(15, 2) NOT NULL DEFAULT 0.00,
    
    -- GST Breakdown (optional - for detailed GST tracking)
    cgst DECIMAL(15, 2) DEFAULT 0.00,
    sgst DECIMAL(15, 2) DEFAULT 0.00,
    igst DECIMAL(15, 2) DEFAULT 0.00,
    
    -- Audit Fields
    createddate DATETIME DEFAULT CURRENT_TIMESTAMP,
    updateddate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdby INT,
    updatedby INT,
    
    -- Foreign Key
    FOREIGN KEY (salesid) REFERENCES sales_summary(salesid) ON DELETE CASCADE,
    -- FOREIGN KEY (productid) REFERENCES product(productid),
    -- FOREIGN KEY (createdby) REFERENCES user(userid),
    -- FOREIGN KEY (updatedby) REFERENCES user(userid),
    
    -- Indexes
    INDEX idx_salesid (salesid),
    INDEX idx_productid (productid),
    INDEX idx_createddate (createddate)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- Trigger to Auto-calculate Amount
-- Automatically calculates amount = quantity * rate
-- =====================================================

DELIMITER $$

CREATE TRIGGER IF NOT EXISTS calculate_sales_detail_amount
BEFORE INSERT ON sales_details
FOR EACH ROW
BEGIN
    SET NEW.amount = NEW.quantity * NEW.rate;
    
    -- Calculate GST breakdown if gstPercent is provided
    IF NEW.gstPercent > 0 THEN
        SET NEW.cgst = (NEW.amount * NEW.gstPercent / 200); -- CGST is half of total GST
        SET NEW.sgst = (NEW.amount * NEW.gstPercent / 200); -- SGST is half of total GST
        SET NEW.igst = 0; -- IGST is used for inter-state, can be set separately if needed
    END IF;
END$$

DELIMITER ;

-- =====================================================
-- Trigger to Update Sales Summary Totals
-- Automatically updates subtotal, totalgst, and grandtotal
-- =====================================================

DELIMITER $$

CREATE TRIGGER IF NOT EXISTS update_sales_summary_totals
AFTER INSERT ON sales_details
FOR EACH ROW
BEGIN
    UPDATE sales_summary
    SET 
        subtotal = (
            SELECT COALESCE(SUM(amount), 0)
            FROM sales_details
            WHERE salesid = NEW.salesid
        ),
        totalgst = (
            SELECT COALESCE(SUM(amount * gstPercent / 100), 0)
            FROM sales_details
            WHERE salesid = NEW.salesid
        ),
        grandtotal = (
            SELECT COALESCE(SUM(amount + (amount * gstPercent / 100)), 0)
            FROM sales_details
            WHERE salesid = NEW.salesid
        ),
        updateddate = CURRENT_TIMESTAMP
    WHERE salesid = NEW.salesid;
END$$

CREATE TRIGGER IF NOT EXISTS update_sales_summary_totals_on_update
AFTER UPDATE ON sales_details
FOR EACH ROW
BEGIN
    UPDATE sales_summary
    SET 
        subtotal = (
            SELECT COALESCE(SUM(amount), 0)
            FROM sales_details
            WHERE salesid = NEW.salesid
        ),
        totalgst = (
            SELECT COALESCE(SUM(amount * gstPercent / 100), 0)
            FROM sales_details
            WHERE salesid = NEW.salesid
        ),
        grandtotal = (
            SELECT COALESCE(SUM(amount + (amount * gstPercent / 100)), 0)
            FROM sales_details
            WHERE salesid = NEW.salesid
        ),
        updateddate = CURRENT_TIMESTAMP
    WHERE salesid = NEW.salesid;
END$$

CREATE TRIGGER IF NOT EXISTS update_sales_summary_totals_on_delete
AFTER DELETE ON sales_details
FOR EACH ROW
BEGIN
    UPDATE sales_summary
    SET 
        subtotal = (
            SELECT COALESCE(SUM(amount), 0)
            FROM sales_details
            WHERE salesid = OLD.salesid
        ),
        totalgst = (
            SELECT COALESCE(SUM(amount * gstPercent / 100), 0)
            FROM sales_details
            WHERE salesid = OLD.salesid
        ),
        grandtotal = (
            SELECT COALESCE(SUM(amount + (amount * gstPercent / 100)), 0)
            FROM sales_details
            WHERE salesid = OLD.salesid
        ),
        updateddate = CURRENT_TIMESTAMP
    WHERE salesid = OLD.salesid;
END$$

DELIMITER ;

-- =====================================================
-- View: Sales Summary with Details
-- Provides a comprehensive view of sales with line items
-- =====================================================

CREATE OR REPLACE VIEW vw_sales_with_details AS
SELECT 
    ss.salesid,
    ss.invoiceno,
    ss.saledate,
    ss.customerid,
    ss.customername,
    ss.customeraddress,
    ss.customergstin,
    ss.subtotal,
    ss.totalgst,
    ss.grandtotal,
    ss.paymentmethod,
    ss.paymentstatus,
    ss.notes,
    ss.isactive,
    ss.createddate,
    ss.updateddate,
    sd.salesdetailid,
    sd.productid,
    sd.description,
    sd.hsnSac,
    sd.quantity,
    sd.rate,
    sd.gstPercent,
    sd.amount,
    sd.cgst,
    sd.sgst,
    sd.igst
FROM 
    sales_summary ss
LEFT JOIN 
    sales_details sd ON ss.salesid = sd.salesid
ORDER BY 
    ss.salesid DESC, sd.salesdetailid ASC;

-- =====================================================
-- Stored Procedure: Insert Sales with Details
-- Allows inserting a sales summary with multiple line items
-- =====================================================

DELIMITER $$

CREATE PROCEDURE IF NOT EXISTS sp_insert_sales_with_details(
    IN p_invoiceno VARCHAR(50),
    IN p_saledate DATE,
    IN p_customerid INT,
    IN p_customername VARCHAR(255),
    IN p_customeraddress TEXT,
    IN p_customergstin VARCHAR(50),
    IN p_paymentmethod VARCHAR(50),
    IN p_paymentstatus VARCHAR(50),
    IN p_notes TEXT,
    IN p_isactive BOOLEAN,
    IN p_createdby INT,
    IN p_updatedby INT,
    IN p_items JSON,  -- JSON array of items: [{"productid":1,"description":"Product","hsnSac":"1234","quantity":2,"rate":100,"gstPercent":18}]
    OUT p_salesid INT
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
    
    START TRANSACTION;
    
    -- Insert into sales_summary
    INSERT INTO sales_summary (
        invoiceno, saledate, customerid, customername, customeraddress, 
        customergstin, paymentmethod, paymentstatus, notes, isactive, 
        createdby, updatedby
    ) VALUES (
        p_invoiceno, p_saledate, p_customerid, p_customername, p_customeraddress,
        p_customergstin, p_paymentmethod, p_paymentstatus, p_notes, p_isactive,
        p_createdby, p_updatedby
    );
    
    SET p_salesid = LAST_INSERT_ID();
    
    -- Insert line items from JSON
    INSERT INTO sales_details (
        salesid, productid, description, hsnSac, quantity, rate, gstPercent,
        createdby, updatedby
    )
    SELECT 
        p_salesid,
        JSON_UNQUOTE(JSON_EXTRACT(item, '$.productid')) AS productid,
        JSON_UNQUOTE(JSON_EXTRACT(item, '$.description')) AS description,
        JSON_UNQUOTE(JSON_EXTRACT(item, '$.hsnSac')) AS hsnSac,
        JSON_UNQUOTE(JSON_EXTRACT(item, '$.quantity')) AS quantity,
        JSON_UNQUOTE(JSON_EXTRACT(item, '$.rate')) AS rate,
        JSON_UNQUOTE(JSON_EXTRACT(item, '$.gstPercent')) AS gstPercent,
        p_createdby,
        p_updatedby
    FROM JSON_TABLE(
        p_items,
        '$[*]' COLUMNS (
            item JSON PATH '$'
        )
    ) AS items;
    
    -- Totals will be updated automatically by trigger
    
    COMMIT;
END$$

DELIMITER ;

-- =====================================================
-- Sample Data Insert (for testing)
-- =====================================================

-- Insert a sample sales summary
INSERT INTO sales_summary (
    invoiceno, saledate, customerid, customername, customeraddress, 
    customergstin, paymentmethod, paymentstatus, isactive, createdby, updatedby
) VALUES (
    'INV-2026-001', 
    CURDATE(), 
    1, 
    'Test Customer', 
    '123 Test Street, Test City',
    '22AAAAA0000A1Z5',
    'Cash',
    'Paid',
    TRUE,
    1,
    1
);

-- Get the salesid for the details
SET @sales_id = LAST_INSERT_ID();

-- Insert sample sales details (multiple products)
INSERT INTO sales_details (
    salesid, productid, description, hsnSac, quantity, rate, gstPercent, createdby, updatedby
) VALUES
    (@sales_id, 1, 'Samsung Galaxy S24 Ultra', '8517', 2, 89999.00, 18.00, 1, 1),
    (@sales_id, 2, 'Apple MacBook Pro 14-inch M3', '8471', 1, 199900.00, 18.00, 1, 1);

-- =====================================================
-- Useful Queries
-- =====================================================

-- Query to get sales summary with item count
-- SELECT 
--     ss.*,
--     COUNT(sd.salesdetailid) AS item_count
-- FROM sales_summary ss
-- LEFT JOIN sales_details sd ON ss.salesid = sd.salesid
-- GROUP BY ss.salesid;

-- Query to get sales with all details as JSON array
-- SELECT 
--     ss.*,
--     JSON_ARRAYAGG(
--         JSON_OBJECT(
--             'salesdetailid', sd.salesdetailid,
--             'productid', sd.productid,
--             'description', sd.description,
--             'hsnSac', sd.hsnSac,
--             'quantity', sd.quantity,
--             'rate', sd.rate,
--             'gstPercent', sd.gstPercent,
--             'amount', sd.amount
--         )
--     ) AS items
-- FROM sales_summary ss
-- LEFT JOIN sales_details sd ON ss.salesid = sd.salesid
-- GROUP BY ss.salesid;
