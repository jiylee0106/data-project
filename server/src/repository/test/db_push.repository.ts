import { PrismaClient } from "@prisma/client";
import casual from "casual";
const prisma = new PrismaClient();

class PushDb {
  async createMockData(numberOfData: number) {
    const createdData = [];

    for (let i = 0; i < numberOfData; i++) {
      const randomUserId = Math.floor(Math.random() * 5) + 1;
      const randomPoints = Math.floor(Math.random() * 15) + 1;
      const randomActionType = Math.random() > 0.5 ? "Earned" : "Spent";
      const randomMethod = casual.random_element(methodsEnum);
      const randomEventDate = casual.date("YYYY-MM-DD");

      const createdRecord = await prisma.pointsLog.create({
        data: {
          userId: randomUserId,
          points: randomPoints,
          action_type: randomActionType,
          method: randomMethod,
          event_date: new Date(randomEventDate),
        },
      });

      createdData.push(createdRecord);
    }

    return createdData;
  }

  async createMockCollection(numberOfData: number) {
    const createdData = [];

    for (let i = 0; i < numberOfData; i++) {
      const randomUserId = Math.floor(Math.random() * 5) + 1;
      const randomAnimalId = Math.floor(Math.random() * 213) + 1;

      const createdRecord = await prisma.collection.create({
        data: {
          userId: randomUserId,
          animal_id: randomAnimalId,
        },
      });

      createdData.push(createdRecord);
    }

    return createdData;
  }
}

const methodsEnum = [
  "Watched_Data",
  "Watched_Daily_Species1",
  "Watched_Daily_Species2",
  "Watched_Daily_Species3",
  "Watched_Daily_Species4",
  "Participation",
  "Quiz",
  "Watched_Video",
  "Joined_Campaign1",
  "Joined_Campaign2",
  "Joined_Campaign3",
  "Draw_Degree1",
  "Draw_Degree2",
];

export default PushDb;
