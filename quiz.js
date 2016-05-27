var newHeight = document.getElementById("height");
var newCharacter = document.getElementById("character");
var newSubmit = document.getElementById("submit");

var tree = {};

newSubmit.addEventListener("click", getValues);

window.addEventListener("keyup", submitOnEnter);
function submitOnEnter(event) {
  if (event.keycode === 13) {
    getValues();
  }
}

function getValues(){
  var inputHeight = newHeight.value;
  var inputCharacter = newCharacter.value;
  if (inputHeight === "" || inputCharacter === "") {
    alert("Please enter a value for both inputs");
  } else {
    tree.height = inputHeight;
    tree.character = inputCharacter;
    growTree(tree);
  }
}

function growTree(treeParamaters) {
  var rows = treeParamaters.character;
  var space =" ";
  var spaces = treeParamaters.height - 1;
  var actualSpaces = space.repeat(spaces);
  for (var i = 0; i < treeParamaters.height; i++) {
    console.log(actualSpaces + rows);
    rows += treeParamaters.character + treeParamaters.character;
    spaces -= 1;
    if (spaces >= 0) {
      actualSpaces = space.repeat(spaces);
    }
  }
}

