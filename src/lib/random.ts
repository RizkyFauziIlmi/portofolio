interface RandomVideoResult<T> {
  video: T;
  index: number;
}

export const getRandomVideo = <T>(array: T[]): RandomVideoResult<T> => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomVideo = array[randomIndex];
  return { video: randomVideo, index: randomIndex };
};

// Fisher-Yates (Knuth) shuffle algorithm
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};
