/*
  Warnings:

  - You are about to drop the column `supplier_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_supplier_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_user_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "supplier_id",
DROP COLUMN "user_id";
