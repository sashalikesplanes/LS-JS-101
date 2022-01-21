let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

Object.entries(munsters).forEach((munster) =>
  console.log(
    `${munster[0]} is a ${munster[1].age}-year-old ${munster[1].gender}.`
  )
);
