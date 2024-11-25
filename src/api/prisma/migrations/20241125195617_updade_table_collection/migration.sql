/*
  Warnings:

  - Added the required column `amount` to the `Record_Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Record_Collection` ADD COLUMN `amount` INTEGER NOT NULL;
