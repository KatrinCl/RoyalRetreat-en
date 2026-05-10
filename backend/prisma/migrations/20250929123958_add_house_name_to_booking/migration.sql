-- AlterTable
ALTER TABLE "public"."Booking" ADD COLUMN     "houseName" TEXT,
ALTER COLUMN "roomName" DROP NOT NULL;
