const VALID_CHARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const generateRandomChar = () => {
  let randomNum = Math.floor(Math.random() * 16);
  return VALID_CHARS[randomNum];
};

const generateUUID = () => {
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    if ([8, 12, 16, 20].includes(i)) uuid += "-";
    uuid += generateRandomChar();
  }
  return uuid;
};

console.log(generateUUID());
