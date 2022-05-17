export const getRandomInt = (min: number, max?: number): number => {
  if (typeof max == "undefined") {
    max = min;
    min = 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomElement = <T>(a: T[]): T => {
  return a[Math.floor(a.length * Math.random())];
};
