/*
  Warnings:

  - You are about to drop the column `items` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `checkIn` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkOut` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomName` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Booking" DROP COLUMN "items",
ADD COLUMN     "checkIn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "checkOut" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "roomName" TEXT NOT NULL;
