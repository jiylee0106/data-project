/*
  Warnings:

  - Added the required column `video_id` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "video_id" VARCHAR(100) NOT NULL;
