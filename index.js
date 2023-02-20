/** @format */

//Question 3

/*Bolatito just got admitted into Greenfield High School. To commence Studies, she needs to know the subjects she will be taking as an Arts Student. Here is A Program to output the exact Subjects Bolatito will be taking as an Arts Students. All Students have to take General Subjects. In the case of an invalid class group, the output will be the General Subjects*/

//The subjects for each class group are as follows:
// Science Subjects: Physics, Chemistry, Biology, Technical Drawing
//Social Science Subjects: Accounting, Commerce, Marketing, Geography
//Arts Subjects: Government, Economics, Literature, History
//General Subjects: English, Mathematics.

let studentName = "Bolatito";
let generalSubjects = "English and Mathematics";

let classGroup = "Arts";

if (classGroup === "Science") {
	console.log(
		`Hello ${studentName}, the subjects you will be taking are : Physics, Chemistry, Biology, Technical Drawing, ${generalSubjects}`
	);
} else if (classGroup === " Social Science") {
	console.log(
		`Hello ${studentName}, the subjects you will be taking are : Accounting, Commerce, Marketing, Geography, ${generalSubjects}`
	);
} else if (classGroup === "Arts") {
	console.log(
		`Hello ${studentName}, the subjects you will be taking are : Government, Economics, Literature, History, ${generalSubjects}`
	);
} else {
	console.log(
		`Hello ${studentName}, the subjects you will be taking are : ${generalSubjects}`
	);
}

//Question 5
//A program that takes a positive number (num) and finds the power of 2 nearest to that number.
//The program stores the resulting value in power.
// Logs out the answer in this format - "The number (pwr) is the power of 2 nearest to (num)".

let num = 7; // the number to find the nearest power of 2 to
let initialValue = 0; // the power of 2

while (Math.pow(2, initialValue) <= num) {
	initialValue++;
}

let pwr = Math.pow(2, initialValue - 1);
console.log(`The number ${pwr} is the power of 2 nearest to ${num}`);
