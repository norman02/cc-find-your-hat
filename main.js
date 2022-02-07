const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this._field = field;
  }
  print() {
    this._field = this._field.join("\n");
    console.log(this._field.replace(/,/g, ""));
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

const fieldArray = [blankArray, blankArray, blankArray];

const myField = new Field(fieldArray);

myField.print();
