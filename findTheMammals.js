const animals = [
  {
    type: "Dog",
    mammal: true,
  },
  {
    type: "Snake",
    mammal: false,
  },
  {
    type: "Cheetah",
    mammal: true,
  },
];

const mammals = animals.filter((animal) => animal.mammal);

const mammals2 = [];
for (let animal of animals) {
  if (animal.mammal) mammals2.push(animal);
}
