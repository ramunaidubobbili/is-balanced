import "./styles.css";

function isBalanced(str) {
  const arr = str.split("");
  let result = [];
  let start = {
    "(": true,
    "[": true,
    "{": true
  };
  let end = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  for (let i = 0; i < arr.length; i++) {
    if (start[arr[i]]) {
      result.push(arr[i]);
    } else if (end[arr[i]] && result.pop() !== end[arr[i]]) {
      return false;
    }
  }
  return !result.length;
}

let string = "[(){}]";
document.getElementById("app").innerHTML = isBalanced(string);
