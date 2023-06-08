import { Collection } from "@prisma/client";

const getRandomAnimal = async (current_collection: Collection[]) => {
  const allPossibleAnimals = Array.from({ length: 213 }, (_, i) => i + 1);
  if (current_collection.length === 213)
    throw { status: 403, message: "이미 모든 동물을 수집하였습니다" };
  const collectedAnimals = current_collection.map(
    (collection) => collection.animal_id
  );
  const availableAnimals = allPossibleAnimals.filter(
    (animal) => !collectedAnimals.includes(animal)
  );

  const randomIndex = Math.floor(Math.random() * availableAnimals.length);
  return availableAnimals[randomIndex];
};

export { getRandomAnimal };
