-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `PERFIL_ID` INTEGER UNSIGNED NOT NULL,
    `full_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `birth_date` VARCHAR(100) NOT NULL,
    `district` VARCHAR(100) NOT NULL,
    `number` INTEGER NOT NULL,
    `complement` VARCHAR(20) NULL,
    `phone` VARCHAR(20) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `perfil` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `label` VARCHAR(40) NOT NULL,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `status` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_PERFIL_ID_fkey` FOREIGN KEY (`PERFIL_ID`) REFERENCES `perfil`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
