import testData from "./test.json";

export const getRoomList = () => {
  // simulate api request with 2000ms delay
  return new Promise(resolve => {
    return setTimeout(() => {
      resolve(testData);
    }, 1000);
  });
};
