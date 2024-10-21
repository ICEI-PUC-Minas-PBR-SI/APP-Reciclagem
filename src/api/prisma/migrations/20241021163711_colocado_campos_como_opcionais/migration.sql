/*
  Warnings:

  - You are about to drop the column `birth_date` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `birth_date`,
    MODIFY `full_name` VARCHAR(100) NULL,
    MODIFY `username` VARCHAR(100) NULL,
    MODIFY `district` VARCHAR(100) NULL,
    MODIFY `number` INTEGER NULL,
    MODIFY `phone` VARCHAR(20) NULL;
