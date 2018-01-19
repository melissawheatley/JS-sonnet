// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.


// ==== DECLARED A NEW VAR IN THIS VERSION, but REFACTORED ==== //
// let originSonnet = document.getElementById("sonnet").innerHTML;
// // console.log(originSonnet);
// let orphansIndex = originSonnet.indexOf("orphans");
// console.log(`Position of Orphans: ${orphansIndex}`);

// let sonnetCharacters = originSonnet.length;
// console.log(`Characters in sonnet: ${sonnetCharacters}`);

// originSonnet = originSonnet.replace("winter", "yuletide");
// // console.log(originSonnet);

// originSonnet = originSonnet.replace(/the /g, "a large ");
// originSonnet = originSonnet.replace(/The /g, "A large ");
// console.log(originSonnet);

// document.getElementById("sonnet").innerHTML = originSonnet;

let sonnet = document.getElementById("sonnet").innerHTML;
let orphansIndex = sonnet.indexOf("orphans");
console.log(`Position of Orphans: ${orphansIndex}`);

let sonnetCharacters = sonnet.length;
console.log(`Characters in sonnet: ${sonnetCharacters}`);

sonnet = sonnet.replace("winter", "yuletide");
// console.log(originSonnet);

sonnet = sonnet.replace(/the /g, "a large ");
sonnet = sonnet.replace(/The /g, "A large ");
// console.log(sonnet);

document.getElementById("sonnet").innerHTML = sonnet;