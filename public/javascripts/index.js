// SELECT ALL WORDS

// users click on the button
const userList = document.querySelector("#word-info");
const getWordBtn = document.querySelector("#get-definition");
const getDefinitionsByWordBtn = document.querySelector("#get-users-by-name");

// Fetch the results
async function displayDefinitions() {
  const response = await fetch("/dictionary");
  const data = await response.json();

  const definition = data.payload;

  definition.forEach((word) => {
    const newWord = document.createElement("li");
    newWord.innerText = `Word: ${word.word} - Example: ${word.example} - Definition: ${word.definition}`;
    userList.appendChild(newWord);
  });
}

// add event listener
getWordBtn.addEventListener("click", displayDefinitions);
getDefinitionsByWordBtn.addEventListener("click", displayResultsByWord);

// SEARCH BY WORD
// users click on the button

// Fetch the results
async function displayResultsByWord() {
  // users add input
  function getInputFromTextBox() {
    let inputField = document.querySelector("#inputField").value;
    return inputField;
  }
  // users input will be storage into a variable
  let userInput = getInputFromTextBox();

  // Fetch the user input in the table.
  const response = await fetch(`/dictionary/${userInput}`);
  const data = await response.json();

  //  return the table with filtered information - only the payload proprety
  let user = data.payload;

  // display results int the list
  let wordDisplay = document.querySelector("#word");
  let exampleDisplay = document.querySelector("#example");
  let definitionDisplay = document.querySelector("#definition");

  wordDisplay.innerHTML = `Word: ${user[0].word}`;
  exampleDisplay.innerHTML = `Example: ${user[0].example}`;
  definitionDisplay.innerHTML = `Definition: ${user[0].definition}`;
}

// add event listener

// ADD NEW DEFINITION ON THE DICTIONARY

function getInputFromForm() {
  // users input the value on the fields
  let addNewWord = document.querySelector(`#newWord`).value;
  let addNewExample = document.querySelector(`#newExample`).value;
  let addNewDescription = document.querySelector(`#newDescription`).value;
  return {
    addNewWord,
    addNewExample,
    addNewDescription,
  };
}
console.log(getInputFromForm);

// click on submit it
let submit = document.querySelector(`#submit`);
submit.addEventListener(`click`, AddNewForm);

// the data is added to the database
async function AddNewForm() {
  //invoke the function
  let userInput = getInputFromForm();
  console.log(userInput);

  //Fetch
  let response = await fetch(`/dictionary`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getInputFromForm()),
  });

  const data = await response.json();
  console.log(data);

  let user = data.payload;

  let wordDisplay = document.querySelector("#word");
  let exampleDisplay = document.querySelector("#example");
  let definitionDisplay = document.querySelector("#definition");

  wordDisplay.innerHTML = `Word: ${user[0].word}`;
  exampleDisplay.innerHTML = `Example: ${user[0].example}`;
  definitionDisplay.innerHTML = `Definition: ${user[0].definition}`;
}
