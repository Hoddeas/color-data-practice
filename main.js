// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  // Display Name and Family of All Colors
  outputEl.innerHTML = "<h3>Display All Colors</h3>";
  for (let i = 0; i < colorData.length; i++) {
    outputEl.innerHTML += `${colorData[i].name} - ${colorData[i].family} <br>`;
  }
}

function brightColors() {
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
  outputEl.innerHTML = "<h3>Display Bright Colors</h3>";
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].brightness >= 200) {
      outputEl.innerHTML += `${colorData[i].name} - ${colorData[i].brightness} <br>`;
    }
  }
}

function redPinkFamilies() {
  // Count Colors in Red/Pink Families
  outputEl.innerHTML = "<h3>Count Red/Pink Family Colors</h3>";
  let colorsInRedAndPinkFamily = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Red" || colorData[i].family === "Pink") {
      colorsInRedAndPinkFamily++;
    }
  }
  outputEl.innerHTML = `Colors in Red and Pink Family: ${colorsInRedAndPinkFamily}`;
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Family Search</h3>";
  let userInput = prompt("Enter color family name:");
  let userInputColorFamilyCount = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === userInput) {
      userInputColorFamilyCount++;
      outputEl.innerHTML += `${colorData[i].name} - ${colorData[i].family} <br>`;
    }
  }
  outputEl.innerHTML += `Colors in that family: ${userInputColorFamilyCount}`;
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
  let userInput = prompt("Enter color starting letter:");
  let userInputColorStartingLetterCount = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].name[0] === userInput) {
      userInputColorStartingLetterCount++;
      outputEl.innerHTML += `${colorData[i].name}<br>`;
    }
  }
  outputEl.innerHTML += `Colors that start with that letter: ${userInputColorStartingLetterCount++}`;
}
