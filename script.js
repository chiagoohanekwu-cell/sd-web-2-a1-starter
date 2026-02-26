"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const characters = [
    { id: 1, name: "Luke Skywalker", age: 23 },
    { id: 2, name: "Darth Vader", age: 45 },
    { id: 3, name: "Princess Leia", age: 23 },
    { id: 4, name: "Obi-Wan Kenobi", age: 57 },
    { id: 5, name: "Yoda", age: 900 },
    { id: 6, name: "Han Solo", age: 32 },
    { id: 7, name: "Chewbacca", age: 234 },
    { id: 8, name: "R2-D2", age: 33 },
    { id: 9, name: "C-3PO", age: 112 },
    { id: 10, name: "Padmé Amidala", age: 27 }
  ];

  const namesList = document.getElementById("names-list");
  const youngList = document.getElementById("young-characters-list");
  const functionList = document.getElementById("function-list");
  const ageFilterList = document.getElementById("age-filter-list");
  const errorMessages = document.getElementById("error-messages");
  const brokenArrayErrors = document.getElementById("broken-array-errors");

  // Exercise 1
  if (namesList) {
    characters.forEach(function (character) {
      console.log(character.name);
      const li = document.createElement("li");
      li.textContent = character.name;
      namesList.appendChild(li);
    });
  }

  // Exercise 2
  const youngCharacters = characters.filter(function (character) {
    return character.age < 40;
  });

  if (youngList) {
    youngCharacters.forEach(function (character) {
      console.log(character.name);
      const li = document.createElement("li");
      li.textContent = character.name;
      youngList.appendChild(li);
    });
  }

  // Exercise 3 + 5
  function renderList(array, targetList, errorTarget) {
    array.forEach(function (character) {
      if (character.name) {
        const li = document.createElement("li");
        li.textContent = character.name;
        if (targetList) {
          targetList.appendChild(li);
        }
      } else {
        const message = "Missing name property for character with id: " + character.id;
        console.log(message);

        if (errorTarget) {
          const p = document.createElement("p");
          p.textContent = message;
          errorTarget.appendChild(p);
        }
      }
    });
  }

  if (functionList) {
    renderList(characters, functionList, errorMessages);
  }

  // Exercise 4
  function renderByAge(array, ageLimit, targetList, errorTarget) {
    const filtered = array.filter(function (character) {
      return character.age < ageLimit;
    });

    renderList(filtered, targetList, errorTarget);
  }

  if (ageFilterList) {
    renderByAge(characters, 40, ageFilterList, errorMessages);
  }

  // Exercise 6
  const brokenCharacters = [
    { id: 11, age: 50 },
    { id: 12, age: 18 },
    { id: 13, age: 70 }
  ];

  renderList(brokenCharacters, brokenArrayErrors, brokenArrayErrors);

});
