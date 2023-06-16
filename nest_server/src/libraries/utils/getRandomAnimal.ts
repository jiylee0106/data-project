import { Collection, Method } from '@prisma/client';

const getRandomAnimal = async (
  current_collection: Collection[],
  method: Method,
) => {
  let allPossibleAnimals: number[] = [];
  let collectedAnimalsCount = 0;

  if (method === 'Draw_Degree1') {
    allPossibleAnimals = Array.from({ length: 41 }, (_, i) => i + 1);
    collectedAnimalsCount = current_collection.filter(
      (collection) => collection.animal_id <= 41,
    ).length;
  } else if (method === 'Draw_Degree2') {
    allPossibleAnimals = Array.from({ length: 213 - 41 }, (_, i) => i + 42);
    collectedAnimalsCount = current_collection.filter(
      (collection) => collection.animal_id > 41,
    ).length;
  }

  if (collectedAnimalsCount === allPossibleAnimals.length)
    throw { status: 403, message: '이미 모든 동물을 수집 완료하였습니다' };

  const collectedAnimals = current_collection.map(
    (collection) => collection.animal_id,
  );
  const availableAnimals = allPossibleAnimals.filter(
    (animal) => !collectedAnimals.includes(animal),
  );

  const randomIndex = Math.floor(Math.random() * availableAnimals.length);
  return availableAnimals[randomIndex];
};

export { getRandomAnimal };
