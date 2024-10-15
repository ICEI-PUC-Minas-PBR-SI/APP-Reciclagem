-- CreateTable
CREATE TABLE `Establishment` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `district` VARCHAR(100) NOT NULL,
    `neighborhood` VARCHAR(100) NOT NULL,
    `number` INTEGER NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `product` BOOLEAN NOT NULL DEFAULT true,
    `score` BOOLEAN NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `items` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NULL,
    `type` ENUM('Rciclavel', 'Resisuo') NOT NULL,
    `category` ENUM('Papel', 'Plastico', 'Vidro', 'Oleo', 'Metal', 'Baterias') NOT NULL,
    `USER_ID` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Record_Collection` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `EstablishmentId_ID` INTEGER UNSIGNED NOT NULL,
    `USER_ID` INTEGER UNSIGNED NOT NULL,
    `material` VARCHAR(100) NULL,
    `Measurement_Unit` VARCHAR(100) NULL,
    `birth_date` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReRegister_Items_Reciclados` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `ITEMS_ID` INTEGER UNSIGNED NOT NULL,
    `USER_ID` INTEGER UNSIGNED NOT NULL,
    `birth_date` DATE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_USER_ID_fkey` FOREIGN KEY (`USER_ID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Record_Collection` ADD CONSTRAINT `Record_Collection_EstablishmentId_ID_fkey` FOREIGN KEY (`EstablishmentId_ID`) REFERENCES `Establishment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Record_Collection` ADD CONSTRAINT `Record_Collection_USER_ID_fkey` FOREIGN KEY (`USER_ID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReRegister_Items_Reciclados` ADD CONSTRAINT `ReRegister_Items_Reciclados_ITEMS_ID_fkey` FOREIGN KEY (`ITEMS_ID`) REFERENCES `items`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ReRegister_Items_Reciclados` ADD CONSTRAINT `ReRegister_Items_Reciclados_USER_ID_fkey` FOREIGN KEY (`USER_ID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
