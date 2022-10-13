/*
  Warnings:

  - You are about to drop the column `averageRating` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "averageRating",
DROP COLUMN "rating";
