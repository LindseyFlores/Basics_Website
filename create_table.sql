CREATE TABLE IF NOT EXISTS "cart_Products" (
        "cart_product_id"   INTEGER, 
        "cart_id"   INTEGER NOT NULL,
        "product_id"    INTEGER NOT NULL,
        "quantity"  INTEGER NOT NULL,
        PRIMARY KEY("cart_product_id" AUTOINCREMENT),
        FOREIGN KEY("product_id")REFERENCES "products"("product_id"),
        FOREIGN KEY("cart_id")REFERENCES "cart"("cart_id")
);
CREATE TABLE IF NOT EXISTS "cart" (
        "cart_id"   INTEGER NOT NULL UNIQUE, 
        "status"   TEXT NOT NULL CHECK("status" IN("new", "abandoned", "purchased")),
        "created_date"    TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "user_id"  INTEGER NOT NULL,
        PRIMARY KEY("cart_id" AUTOINCREMENT),
        FOREIGN KEY("user_id")REFERENCES "users"("user_id")

);
CREATE TABLE IF NOT EXISTS "categories" (
        "category_id"   INTEGER NOT NULL UNIQUE, 
        "name"   TEXT,
        "display_order"    INTEGER,
        PRIMARY KEY("category_id" AUTOINCREMENT)

);
CREATE TABLE IF NOT EXISTS "products" (
        "product_id"   INTEGER NOT NULL UNIQUE, 
        "name"   TEXT NOT NULL,
        "description"    TEXT NOT NULL,
        "image_url"  TEXT ,
        "price"  REAL NOT NULL,
        "other_details"  TEXT,
        "category_id"  INTEGER NOT NULL,
        "featured"  INTEGER,
        PRIMARY KEY("product_id" AUTOINCREMENT),
        FOREIGN KEY("category_id")REFERENCES "categories"("category_id")

);
CREATE TABLE IF NOT EXISTS "users" (
        "user_id"   INTEGER PRIMARY KEY AUTOINCREMENT,
        "user_email"  TEXT NOT NULL UNIQUE,
        "user_password"  TEXT NOT NULL,
        "user_record"   TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
);
