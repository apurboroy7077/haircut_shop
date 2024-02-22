import { animalNames } from "../model/fakeData.js";

let smallScreenSearchbar = document.getElementsByClassName(
  "searchbarSmallScreen"
)[0];
let searchSuggestionDiv = document.getElementsByClassName(
  "search_suggestions_div"
)[0];
let searchSuggestionDivLargeScreen = document.getElementsByClassName(
  "large_screen_autosuggestion_div"
)[0];
smallScreenSearchbar.addEventListener("input", () => {
  let inputKeywords = smallScreenSearchbar.value;
  if (searchSuggestionDiv.classList.contains("display_none")) {
    searchSuggestionDiv.classList.remove("display_none");
  }
  if (searchSuggestionDivLargeScreen.classList.contains("display_none")) {
    searchSuggestionDivLargeScreen.classList.remove("display_none");
  }
  let matchingNames = [];
  for (let i = 0; i < animalNames.length; i++) {
    let name = animalNames[i].toLowerCase();
    inputKeywords = inputKeywords.toLowerCase();
    if (name.includes(inputKeywords)) {
      matchingNames.push(name);
    }
  }

  if (matchingNames.length > 10) {
    matchingNames = matchingNames.slice(0, 10);
  }
  let htmlcode = ``;
  for (let i = 0; i < matchingNames.length; i++) {
    let theName = matchingNames[i];
    let code = `<div>${theName}</div>`;
    htmlcode = htmlcode + code;
  }
  searchSuggestionDiv.innerHTML = htmlcode;
  searchSuggestionDivLargeScreen.innerHTML = htmlcode;
});
smallScreenSearchbar.addEventListener("blur", () => {
  searchSuggestionDiv.classList.add("display_none");
  searchSuggestionDivLargeScreen.classList.add("display_none");
});
