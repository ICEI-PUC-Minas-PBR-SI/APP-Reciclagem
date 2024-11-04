/*
  Warnings:

  - You are about to alter the column `product` on the `Establishment` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Establishment` MODIFY `product` VARCHAR(191) NOT NULL;
