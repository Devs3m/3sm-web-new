-- =====================================================
-- Inventory Current Stock Table
-- Stores current stock quantity per product (per instance/godown)
-- =====================================================

CREATE TABLE IF NOT EXISTS inventory_currentstock (
    stockid BIGINT PRIMARY KEY AUTO_INCREMENT,

    -- Product Reference
    productid BIGINT NOT NULL,

    -- Multi-tenant / Location
    instanceid BIGINT,
    accountid BIGINT,
    godownid BIGINT COMMENT 'Optional: warehouse/godown for multi-location inventory',

    -- Stock Quantity
    quantity DECIMAL(15, 4) NOT NULL DEFAULT 0.0000,
    unit VARCHAR(50) DEFAULT 'pcs' COMMENT 'Unit of measure: pcs, kg, litre, etc.',

    -- Reorder / Alert
    reorderlevel DECIMAL(15, 4) DEFAULT 0.0000 COMMENT 'Alert when stock falls below this',
    reorderqty DECIMAL(15, 4) DEFAULT 0.0000 COMMENT 'Suggested reorder quantity',

    -- Last stock movement (optional tracking)
    laststockdate DATE COMMENT 'Date of last stock-in/out',
    laststockqty DECIMAL(15, 4) COMMENT 'Quantity of last movement',

    -- Status
    isactive BOOLEAN DEFAULT TRUE,

    -- Audit Fields
    createddate DATETIME DEFAULT CURRENT_TIMESTAMP,
    updateddate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    createdby BIGINT,
    updatedby BIGINT,

    -- Unique constraint: one stock record per product per instance
    -- (Use godownid = 0 for main stock when using multi-warehouse; NULL treated as "not applicable")
    UNIQUE KEY uk_product_instance (productid, instanceid),

    -- Foreign Keys (uncomment when referenced tables exist)
    -- FOREIGN KEY (productid) REFERENCES product(productid) ON DELETE CASCADE,
    -- FOREIGN KEY (instanceid) REFERENCES instance(instanceid),
    -- FOREIGN KEY (accountid) REFERENCES account(accountid),
    -- FOREIGN KEY (godownid) REFERENCES godown(godownid),

    -- Indexes
    INDEX idx_productid (productid),
    INDEX idx_instanceid (instanceid),
    INDEX idx_accountid (accountid),
    INDEX idx_godownid (godownid),
    INDEX idx_quantity (quantity),
    INDEX idx_reorderlevel (reorderlevel),
    INDEX idx_isactive (isactive),
    INDEX idx_createddate (createddate),
    INDEX idx_updateddate (updateddate)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
COMMENT='Current stock levels per product, per instance/warehouse';


-- =====================================================
-- Optional: View for low-stock alert
-- Products where quantity <= reorderlevel
-- =====================================================

CREATE OR REPLACE VIEW vw_inventory_low_stock AS
SELECT
    s.stockid,
    s.productid,
    s.instanceid,
    s.accountid,
    s.godownid,
    s.quantity,
    s.reorderlevel,
    s.reorderqty,
    s.unit,
    (s.reorderlevel - s.quantity) AS shortfall,
    s.updateddate
FROM inventory_currentstock s
WHERE s.isactive = 1
  AND s.reorderlevel > 0
  AND s.quantity <= s.reorderlevel
ORDER BY (s.reorderlevel - s.quantity) DESC;


-- =====================================================
-- Sample: Insert or update stock (MySQL 8.0+)
-- Uses INSERT ... ON DUPLICATE KEY UPDATE
-- =====================================================

-- Example: Add/update stock for product 1, instance 1
-- INSERT INTO inventory_currentstock (productid, instanceid, accountid, quantity, reorderlevel, createdby, updatedby)
-- VALUES (1, 1, 1, 100.0000, 10.0000, 1, 1)
-- ON DUPLICATE KEY UPDATE
--     quantity = quantity + VALUES(quantity),
--     updateddate = CURRENT_TIMESTAMP,
--     updatedby = VALUES(updatedby);
