export default function printMe() {
  console.log("I get called from test.jssdsdsdsds!");
  // cosnole.log("I get called froms print.js!");
}

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello";
  element.classList.add("head");

  return element;
}

document.body.appendChild(component());
