// Get random integer
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Генератор рандомного индекса
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];