-- CreateTable
CREATE TABLE `Regencies` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `alt_name` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL DEFAULT 0,
    `longitude` DOUBLE NOT NULL DEFAULT 0,
    `total_population` INTEGER NOT NULL DEFAULT 0,
    `total_hospital` INTEGER NOT NULL DEFAULT 0,
    `total_destination` INTEGER NOT NULL DEFAULT 0,
    `total_mousque` INTEGER NOT NULL DEFAULT 0,
    `total_tourism` INTEGER NOT NULL DEFAULT 0,
    `total_private_college` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `regency_poligons` (
    `id` INTEGER NOT NULL,
    `regency_id` INTEGER NOT NULL,
    `type` ENUM('Polygon', 'MultiPolygon') NOT NULL DEFAULT 'Polygon',
    `polygon` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `districts` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `alt_name` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL DEFAULT 0,
    `longitude` DOUBLE NOT NULL DEFAULT 0,
    `regency_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `regency_poligons` ADD CONSTRAINT `regency_poligons_regency_id_fkey` FOREIGN KEY (`regency_id`) REFERENCES `Regencies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `districts` ADD CONSTRAINT `districts_regency_id_fkey` FOREIGN KEY (`regency_id`) REFERENCES `Regencies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
