let obj = {
  grape: { type: "fruit", colors: ["red", "green"], size: "small" },
  carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
  apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
  apricot: { type: "fruit", colors: ["orange"], size: "medium" },
  marrow: { type: "vegetable", colors: ["green"], size: "large" },
};

const result = Object.values(obj).map((produce) => {
  if (produce.type === "fruit") {
    return produce.colors.map(
      (color) => color.slice(0, 1).toUpperCase() + color.slice(1).toLowerCase()
    );
  } else if (produce.type === "vegetable") {
    return produce.size.toUpperCase();
  } else return [];
});
console.log(result);
