function minilang(commands) {
  const stack = [];
  let registry = 0;
  commands.split(" ").forEach((command) => {
    if (Number.isInteger(Number(command))) registry = Number(command);
    else {
      switch (command) {
        case "PUSH":
          stack.push(registry);
          break;
        case "ADD":
          registry += stack.pop();
          break;
        case "SUB":
          registry -= stack.pop();
          break;
        case "MULT":
          registry *= stack.pop();
          break;
        case "DIV":
          registry = Math.floor(registry / stack.pop());
          break;
        case "REMAINDER":
          registry %= stack.pop();
          break;
        case "POP":
          registry = stack.pop();
          break;
        case "PRINT":
          console.log(registry);
          break;
        default:
          console.log(`The command - ${command} is unrecognized`);
          break;
      }
    }
  });
}

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("5 PUSH POP PRINT");
// 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// 12

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)
