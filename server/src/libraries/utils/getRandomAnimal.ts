import { Collection } from "@prisma/client";

const getRandomAnimal = (current_collection: Collection[]) => {
  const allPossibleAnimals = Array.from({ length: 282 }, (_, i) => i + 1);
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
