/*
  Warnings:

  - The `features` column on the `Hotel` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Hotel" DROP COLUMN "features",
ADD COLUMN     "features" TEXT[];

-- CreateTable
CREATE TABLE "public"."House" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "features" TEXT[],
    "warning" TEXT,
    "bonus" TEXT,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);
