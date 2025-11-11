// Q1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Q2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);

// Q3
let numStr = '10';
console.log(typeof numStr === typeof 10); // false
let num = Number(numStr);
console.log(num); // 10
console.log(typeof num === typeof 10); // true

// Q4
let floatNum = parseFloat('9.8');
console.log(floatNum === 10); 
floatNum = Math.ceil(floatNum);
console.log(floatNum === 10); 

// Q5
console.log('python'.includes('on') && 'jargon'.includes('on')); 

// Q6
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes('jargon')); 

// Q7
let random0to100 = Math.floor(Math.random() * 101);
console.log(random0to100);

// Q8
let random50to100 = Math.floor(Math.random() * 51) + 50;
console.log(random50to100);

// Q9
let random0to255 = Math.floor(Math.random() * 256);
console.log(random0to255);
