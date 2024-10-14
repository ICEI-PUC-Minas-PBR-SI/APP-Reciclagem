/*
  Warnings:

  - You are about to alter the column `birth_date` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Date`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `birth_date` DATE NULL;
