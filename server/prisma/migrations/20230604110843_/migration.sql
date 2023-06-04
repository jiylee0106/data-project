/*
  Warnings:

  - You are about to drop the column `total_point` on the `User` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "Method" ADD VALUE 'Watched_data';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "total_point";
