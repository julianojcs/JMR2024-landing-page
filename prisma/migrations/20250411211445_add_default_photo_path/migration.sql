/*
  Warnings:

  - Made the column `photo_path` on table `speakers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "speakers" ALTER COLUMN "photo_path" SET NOT NULL,
ALTER COLUMN "photo_path" SET DEFAULT 'https://res.cloudinary.com/dixe3b2i5/image/upload/v1742929226/speakers/default-avatar.png';
