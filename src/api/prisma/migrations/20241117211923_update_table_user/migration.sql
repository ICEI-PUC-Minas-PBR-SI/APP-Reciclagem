/*
  Warnings:

  - You are about to drop the column `complement` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `district` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `complement`,
    DROP COLUMN `district`,
    ADD COLUMN `city` VARCHAR(100) NULL,
    ADD COLUMN `state` VARCHAR(100) NULL,
    ADD COLUMN `street` VARCHAR(100) NULL,
    MODIFY `number` VARCHAR(50) NULL,
    MODIFY `cep` VARCHAR(20) NULL;
