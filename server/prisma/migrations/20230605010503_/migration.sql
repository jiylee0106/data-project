/*
  Warnings:

  - The values [Watched_video,Watched_daily_species,Joined_campaign,Watched_data] on the enum `Method` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Method_new" AS ENUM ('Watched_Video', 'Watched_Daily_species', 'Watched_Data', 'Participation', 'Joined_Campaign', 'Draw_Level1', 'Draw_Level2');
ALTER TABLE "PointsLog" ALTER COLUMN "method" TYPE "Method_new" USING ("method"::text::"Method_new");
ALTER TYPE "Method" RENAME TO "Method_old";
ALTER TYPE "Method_new" RENAME TO "Method";
DROP TYPE "Method_old";
COMMIT;
