-- CreateEnum
CREATE TYPE "TypePolygon" AS ENUM ('Polygon', 'MultiPolygon');

-- CreateTable
CREATE TABLE "Regencies" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "alt_name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "longitude" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "total_population" INTEGER NOT NULL DEFAULT 0,
    "total_hospital" INTEGER NOT NULL DEFAULT 0,
    "total_destination" INTEGER NOT NULL DEFAULT 0,
    "total_mousque" INTEGER NOT NULL DEFAULT 0,
    "total_tourism" INTEGER NOT NULL DEFAULT 0,
    "total_private_college" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Regencies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regency_poligons" (
    "id" INTEGER NOT NULL,
    "regency_id" INTEGER NOT NULL,
    "type" "TypePolygon" NOT NULL DEFAULT 'Polygon',
    "polygon" TEXT NOT NULL,

    CONSTRAINT "regency_poligons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "districts" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "alt_name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "longitude" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "regency_id" INTEGER NOT NULL,

    CONSTRAINT "districts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "regency_poligons" ADD CONSTRAINT "regency_poligons_regency_id_fkey" FOREIGN KEY ("regency_id") REFERENCES "Regencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "districts" ADD CONSTRAINT "districts_regency_id_fkey" FOREIGN KEY ("regency_id") REFERENCES "Regencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
