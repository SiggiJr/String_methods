"use strict";

//# Strings_1_1

const firstName = "Helmut";
const lastName = "Rakete";

console.log("firstName:", firstName.length);
console.log("lastnameName:", lastName.length);

const fullName = firstName.concat(" ",lastName);
console.log("fullName", fullName.length);

//# Strings_1_2

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

//# Strings_1_3

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

//# Strings_1_4

const A = 'Susi is going to codingschool';

console.log(A.slice(0, 4));
console.log(A.slice(A.indexOf("is"), 7));
console.log(`${A.slice(A.indexOf("is"), 16)} ${A.slice(A.indexOf("school"))}`);
console.log(A.slice(A.indexOf("school")));
console.log(`${A.slice(0, 7)} ${A.slice(A.indexOf("school"))}`);

//# Strings 1_7

const text = "Sam is good at codingschool";

console.log(text.replace("good", "bad").replace( "coding", ""));
console.log(text.replace("coding", "").replace("Sam", "Susi"));
console.log(text.replace("codingschool", "tennis"));

//# Strings_1_8

const text2 = "Sam is going to codingschool"

console.log(`${text2.slice(0,3).toUpperCase()} ${text2.slice(4,15)} ${text2.slice(text2.indexOf("school")).toUpperCase()}`);

console.log(`${text2.slice(0,3).toLowerCase()} ${text2.slice(4, 15).toUpperCase()} ${text2.slice(text2.indexOf("school"))}`);

console.log(
`${text2.charAt(0).toUpperCase().concat(text2.slice(1,3))} `+
`${text2.charAt(4).toUpperCase().concat(text2.slice(5,6))} `+
`${text2.charAt(7).toUpperCase().concat(text2.slice(8,13))}`+
`${text2.charAt(13).toUpperCase().concat(text2.slice(14,15))} `+
`${text2.charAt(22).toUpperCase().concat(text2.slice(23))}`);

//# Strings_1_9

const text3 = "Susi" 
const text4 = "and";

console.log(
  `${text2.slice(0, 16).concat(text2.slice(22,28)).concat(" ").concat(text4).concat(" to the movie theater")}`
);
console.log(
  `${text2.slice(0, 16).concat(" to the movie theater")}`
);
console.log(
  `${text3.concat(" ").concat(text4).concat(" ").concat(text2.slice(0,3)).concat(" are").concat(text2.slice(6,16)).concat(text2.slice(22, 28))}`
);
console.log(
  `${text3.concat(" ").concat(text4).concat(" ").concat(text2.slice(0,3)).concat(" are").concat(text2.slice(6,16)).concat("gym ").concat(text4).concat(" to the movie theater")}`);

  console.log(
    `${text3.concat(text2.slice(3,16)).concat(text2.slice(22,28)).concat(" ").concat(text4).concat(" to the movie theater")}`);

//# Strings_2_3

function colorText(){
  const input = document.querySelector("#search-input").value;
  const article = document.querySelector("article");
  const newArticle = article.textContent.replaceAll(input, `<span class="highlight">${input}</span>`)
  article.innerHTML= newArticle;
}

