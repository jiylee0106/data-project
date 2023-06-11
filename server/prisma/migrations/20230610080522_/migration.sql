/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Campaign` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Campaign_type_key" ON "Campaign"("type");
