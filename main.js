const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(arr) {
    this._field = arr;
  }
  print() {
    this._field.forEach((e) => {
      console.log(e.join(""));
    });
  }
}
const blankArray = [
  [
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
    fieldCharacter,
  ],
];

const fieldArray = [blankArray, blankArray, blankArray]

const myField = new Field(fieldArray);

myField.print();
