let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 7));
console.log(challenge.substring(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));

let Str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(Str.split(", "));

let newChallenge = challenge.replace("JavaScript", "Python");
console.log(newChallenge);

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(12));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let str1 = "You cannot end a sentence with because because because is a conjunction";
console.log(str1.indexOf("because"));
console.log(str1.lastIndexOf("because"));
console.log(str1.search("because"));
/* challenge = "   30 days of javascript   ";
console.log(challenge.trim()); */
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match(/a/g));

firstStr = "30 days of";
secondStr = " JavaScript";

console.log(firstStr.concat(secondStr));
console.log(challenge.repeat(2));