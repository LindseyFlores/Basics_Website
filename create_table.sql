CREATE TABLE IF NOT EXISTS "cart_Products" (
        "cart_product_id"   INTEGER, 
        "cart_id"   INTEGER NOT NULL,
        "product_id"    INTEGER NOT NULL,
        "quantity"  INTEGER NOT NULL,
        PRIMARY KEY("cart_product_id" AUTOINCREMENT),
        FOREIGN KEY("product_id")REFERENCES "products"("id"),
        FOREIGN KEY("cart_id")REFERENCES "cart"("cart_id")
);
CREATE TABLE IF NOT EXISTS "cart" (
        "cart_id"   INTEGER NOT NULL UNIQUE,
        "created_date"    TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "user_id"  INTEGER NOT NULL,
        "status" TEXT NOT NULL DEFAULT 'active',
        PRIMARY KEY("cart_id" AUTOINCREMENT),
        FOREIGN KEY("user_id")REFERENCES "users"("user_id")
);
CREATE TABLE IF NOT EXISTS "products" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "category" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "price" REAL NOT NULL,
        "description" TEXT NOT NULL,
        "image" TEXT NOT NULL,
        "size"	TEXT NOT NULL

);
CREATE TABLE IF NOT EXISTS "users" (
        "user_id"   INTEGER PRIMARY KEY AUTOINCREMENT,
        "user_email"  TEXT NOT NULL UNIQUE,
        "user_password"  TEXT NOT NULL,
        "user_record"   TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
);