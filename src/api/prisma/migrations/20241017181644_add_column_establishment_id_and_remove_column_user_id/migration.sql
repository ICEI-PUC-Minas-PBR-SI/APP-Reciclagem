/*
  Warnings:

  - You are about to drop the column `USER_ID` on the `items` table. All the data in the column will be lost.
  - Added the required column `EstablishmentId_ID` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `items_USER_ID_fkey`;

-- AlterTable
ALTER TABLE `items` DROP COLUMN `USER_ID`,
    ADD COLUMN `EstablishmentId_ID` INTEGER UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_EstablishmentId_ID_fkey` FOREIGN KEY (`EstablishmentId_ID`) REFERENCES `Establishment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
