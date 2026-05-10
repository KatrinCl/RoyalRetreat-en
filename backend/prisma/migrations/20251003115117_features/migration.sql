/*
  Warnings:

  - You are about to drop the column `description` on the `Hotel` table. All the data in the column will be lost.
  - Added the required column `features` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Hotel" DROP COLUMN "description",
ADD COLUMN     "bonus" TEXT,
ADD COLUMN     "features" TEXT NOT NULL,
ADD COLUMN     "warning" TEXT;
