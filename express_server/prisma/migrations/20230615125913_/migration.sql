-- DropIndex
DROP INDEX "PointsLog_userId_event_date_idx";

-- CreateIndex
CREATE INDEX "Collection_userId_idx" ON "Collection"("userId");
