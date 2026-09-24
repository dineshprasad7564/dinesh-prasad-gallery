// This file counts the gallery items and shows the number in the header.

// Step 1: get all items with the class "item"
var items = document.getElementsByClassName("item");

// Step 2: get the empty span in the header
var countBox = document.getElementById("count");

// Step 3: put the number inside it
countBox.textContent = items.length;
