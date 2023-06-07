/*
  Warnings:

  - The values [Watched_Video1,Watched_Video2] on the enum `Method` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Method_new" AS ENUM ('Watched_Data', 'Watched_Daily_Species1', 'Watched_Daily_Species2', 'Watched_Daily_Species3', 'Watched_Daily_Species4', 'Participation', 'Quiz', 'Watched_Video', 'Joined_Campaign1', 'Joined_Campaign2', 'Joined_Campaign3', 'Draw_Degree1', 'Draw_Degree2');
ALTER TABLE "PointsLog" ALTER COLUMN "method" TYPE "Method_new" USING ("method"::text::"Method_new");
ALTER TYPE "Method" RENAME TO "Method_old";
ALTER TYPE "Method_new" RENAME TO "Method";
DROP TYPE "Method_old";
COMMIT;
