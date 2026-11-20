// Assignment 4

// q1
// let totalPrice = +prompt("Enter your total shopping amount");
// if (totalPrice >= 10000) {
//     var discount = totalPrice * (20 / 100);
//     console.log(discount);
// } else if (totalPrice >= 5000) {
//     var discount = totalPrice * (20 / 100);
//     console.log(discount);
// } else {
//     console.log(totalPrice);
// }


// q2
// let billUnit = +prompt("Enter your Electricity Bill Unit");
// let unit100 = 10;
// let unit200 = 15;
// let unitMore200 = 20;

// if (billUnit <= 100) {
//     var total = billUnit * unit100;
//     console.log(total);
// } else if (billUnit <= 200) {
//     var total = (100 * 10) + (billUnit - 100) * unit200;
//     console.log(total);
// } else if (billUnit >= 201) {
//     var total = (100 * 10) + (100 * 15) + (billUnit - 200) * unitMore200;
//     console.log(total);
// }

// q3
// // total marks
// let totalMarks = 300;
// // each subject marks
// let EnglishMarks = +prompt("Enter your English marks");
// let MathsMarks = +prompt("Enter your Maths marks");
// let CSMarks = +prompt("Enter your CS marks");
// // total of each subject
// let obtainMarks = EnglishMarks + MathsMarks + CSMarks;
// // percentage
// let percentOfTotal = (obtainMarks / totalMarks) * 100;

// if (percentOfTotal >= 90) {
//     console.log("Grade A+");
// } else if (percentOfTotal >= 80) {
//     console.log("Grade A");
// } else if (percentOfTotal >= 70) {
//     console.log("Grade B");
// } else if (percentOfTotal >= 60) {
//     console.log("Grade C");
// } else if (percentOfTotal >= 50) {
//     console.log("Grade D");
// } else {
//     console.log("Fail");
// }

// q4
// let availableBalance = 50000;
// let withdraw = +prompt("Enter withdraw amount");
// let Remaining = availableBalance - withdraw;

// if (withdraw > availableBalance) {
//     console.log("Insufficient Balance");
// } else if (withdraw <= 0) {
//     console.log("invalid Amount");
// } else {
//     if (withdraw % 500 === 0) {
//         console.log("Transaction successful \n Remaining Amount is " + Remaining);
//     } else {
//         console.log("Please enter an amount in multiples of 500");
//     }
// }

// q5
// let totalBill = prompt("Enter your bill");
// let memberShipAvailable = prompt("Do you have a MemberShip card")
// let dis15 = totalBill / 100 * 15;
// let memberShip5 = totalBill / 100 * 5;
// let dis20 = totalBill / 100 * 20;

// if (totalBill>5000 && memberShipAvailable == yes) {
//     console.log("Your amount after discount is " + dis20);
// }else if (totalBill>5000) {
//     console.log("Your amount after discount is " + dis15);
// }else if (memberShipAvailable == yes) {
//     console.log("Your amount after discount is " + memberShip5);
// }else{
//     console.log("you have no discount therefore your amount is " + totalBill);
// }

// q6
// let age = +prompt("How old are you");
// let week = prompt("What is day of the week today"); 
// // age below 12
// let ageBelow12 = 300;
// let disBelow12 = 300/100 *20;
// // age between 12 to 59
// let age12_59 = 600;
// let dis12_59 = 600/100 *20;
// // senior citizen
// let ageSenior = 400;
// let disSenior = 400/100 *20;

// if (age <= 12 && age != 0 && week == "wednesday") {
//     console.log("your total is "+disBelow12);
// }else if (age >= 12 && age <= 59 && age != 0 && week == "wednesday") {
//     console.log("your total is "+dis12_59);
// }else if (ageSenior >= 60 && age != 0 && week == "wednesday") {
//     console.log("your total is "+disSenior);
// }else if (age <= 12 && age != 0) {
//     console.log("your total is "+ageBelow12);
// }else if (age >= 12 && age <= 59 && age != 0) {
//     console.log("your total is "+age12_59);
// }else if (ageSenior >= 60 && age != 0) {
//     console.log("your total is "+ageSenior);
// }else {
//     console.log("Please tell me your age");
// }

// q7
// // Package
// let data = prompt("How much Data you are looking for \n 5GB \n 15GB \n 30GB ");
// let Package = prompt("We've 3 different Package \n Basic Package | 5GB | Rs.300 \n Standard Package | 15GB | Rs.600 \n Premium Package | 30GB | Rs.1,000");

// if (data <= 5 || Package == "Basic Package") {
//     console.log("The Package you've recieved: Basic Package | 5GB | Rs.300");
// }else if (data >= 5 && data >= 15 || Package == "Standard Package") {
//     console.log("The Package you've recieved: Standard Package | 15GB | Rs.600");
// }else  if (data >= 15 && data <= 30 || Package == "Premium Package") {
//     console.log("The Package you've recieved: Premium Package | 30GB | Rs.1,000");
// }else {
//     console.log("Package above 30GB isn't available");
// }

// q8
// let experience = +prompt("Enter your Experience")
// let currentSalary = +prompt("Enter your current Salary");

// if (currentSalary >= 30000 && experience >=5) {
//     let EXP5OrMore = (20/100) * currentSalary;
//     console.log("Your Current Salary is "+ currentSalary +". After bonus your Salary is "+ EXP5OrMore);
// }else if (currentSalary >= 30000 && experience >=3 && experience <=4) {
//     let EXP3To4 = (10/100) * currentSalary;
//     console.log("Your Current Salary is "+ currentSalary +". After bonus your Salary is "+ EXP3To4);
// }else if (currentSalary >= 30000 && experience <=3) {
//     let EXPBelow3 = (5/100) * currentSalary;
//     console.log("Your Current Salary is "+ currentSalary +". After bonus your Salary is "+ EXPBelow3);
// }else{
//     console.log("Your Salary is "+ currentSalary);
// }

// q9
// let orderAmount = +prompt("what is the amount of order");
// let city = prompt("In which city you are in");
// let reduce50 = orderAmount-50;

// if (orderAmount >= 5000 && city == "karachi") {
//     console.log(reduce50);
// }else if (orderAmount >= 2000 && orderAmount <= 5000 && city == "karachi") {
//     let delivery1 = 150;
//     let total1 = delivery1+orderAmount-50;
//     console.log(total1);
// }else if (orderAmount <= 2000 && city == "karachi") {
//     let delivery2 = 250;
//     let total2 = delivery2+orderAmount-50;
//     console.log(total2);
// }else if (orderAmount >= 5000) {
//     console.log(orderAmount);
// }else if (orderAmount >= 2000 && orderAmount <= 5000) {
//     let delivery1 = 150;
//     let total1 = orderAmount+delivery1;
//     console.log(total1);
// }else if (orderAmount <= 2000) {
//     let delivery2 = 250;
//     let total2 = orderAmount+delivery2;
//     console.log(total2);
// }else {
//     console.log("Enter your amount9");
// }

// q10
// let age = +prompt("Enter your age");
// let monthlySalary = +prompt("Enter your monthly salary");
// let jobExp = +prompt("Enter your job Experience"); 

// if (age >=21 && monthlySalary >= 50000 && monthlySalary <= 100000 && jobExp >= 2) {
//     console.log("Eligible for Rs.500,000 loan.");
// }else if (age >=21 && monthlySalary >= 100000 && jobExp >= 2) {
//     console.log("Eligible for Rs.1,000,000");
// }else{
//     if (age<21 && age !=0) {
//         console.log("The minimum age for loan is 21");
//     }else if (jobExp<2 && jobExp!=0) {
//         console.log("The minimum Job Experience for loan is 2 years");
//     }else if (monthlySalary<50000 && monthlySalary!=0) {
//         console.log("The minimum Monthly Salary for loan is 50,000");
//     }else{
//         console.log("condition for loan is: \n Minimum age: 21 \n Minimum Job Experience: 2 years \n Minimum Monthly Salary: Rs.50,000.");
//     }
// }

// q11
// let mobileBuy = 45000;
// let mobileSell = 52000;
// // profit
// let profit = mobileSell-mobileBuy;
// console.log("The total profit is "+profit);
// // profit in percentage
// let profitInPercent = (profit / mobileBuy)*100;
// console.log("the profit in percentage is "+ profitInPercent);

// q12
// let totalAmount = 5000;
// // 25% of food in decimal is 0.25
// let food25 = 0.25*totalAmount;
// console.log("Money spent on Food: "+food25);
// // 15% of transport in decimal is 0.15
// let transport15 = 0.15*totalAmount;
// console.log("Money spent on Transport: "+transport15);
// let totalExpenses = food25+transport15;
// console.log("Total expenses: "+ totalExpenses);
// let remainingMoney = totalAmount-(food25+transport15);
// console.log("Remaining money: "+ remainingMoney);

// q13
// let travel = 180;
// let time = 3;
// let speed = travel /time;
// console.log("The required speed of car is "+ speed+"km/h");

// q14
// let yourAge = +prompt("How old are you"); 
// let after15 = yourAge+15;
// console.log("your current age is "+yourAge+" years after 15years you will be "+after15+" years");

// q15
// let shop = 100;
// let perHour = 5;
// let hours7 =7*perHour;
// let remaining = shop - hours7
// console.log("In 7 hours "+hours7+" products has been sold."+" And "+remaining+" products are remaining" );

// q16
// let number = +prompt("Enter a Number");

// if (number ==0) {
//     console.log("The given number is Zero");
// }else if (number >=1) {
//     console.log("The given number is Positive");
// }else {
//     console.log("The given number is Negative");
// }
