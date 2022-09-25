/* task1
დაწერეთ ფუნქცია ციფრების ჯამი , sumOfDigits(n) რომელიც იღებს ერთ პარამეტრს 
და აბრუნებს გადაცემული მნიშვნელობის შემადგენელი ციფრების ჯამს . 
sumOfDigits(1312) = 1+3+1+2 = 7;

აღნიშნული დავალება შეასრულეთ ორნაირად , როგორც ჩვეულებრივი ასევე რეკურსიული
ფუნქციის გამოყენებით . 

*/


function sumOfDigits(n) {
  if (n < 10) {
      return n  
  } 
   else return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(24355));



//Task 2
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
let factory = {
    facName: "Volkswagen Wolfsburg Plant",
    calculateWorkload: function () {
      let arr = this.employeeWeeklyWorkload;
      let result = {}
      for (let i=0; i<arr.length; i++) {
        result.push(arr[i].timeSpent);
      }
      return result;
    },
    formatArray: function (name) {
      let arr = this.Employees;
      let foundemp = emparr.find((el) => el.name === name);
      let result = {
        name : foundemp.name,
        timeleft : 5 - foundemp.timeSpent,
      }
      return result;
    },
  };

   let checkdata = factory.calculateWorkload.bind(workloadData);
   console.log(checkdata());
  
  let factoryEmployees = {
    employees: [
      { name: "John", timeSpent: 1 },
      { name: "Sam", timeSpent: 3 },
      { name: "Maria", timeSpent: 2 },
      { name: "Dan", timeSpent: 4 },
      { name: "Lorelai", timeSpent: 5 },
    ],
    employeeNum: this.employees.length,
  };
  
const res = factory.formatArray.bind(factoryEmployees)

  let workloadData = {
    employeeWeeklyWorkload: [
      { name: "John", timeSpent: 40 },
      { name: "Sam", timeSpent: 25 },
      { name: "Maria", timeSpent: 28 },
      { name: "Dan", timeSpent: 30 },
      { name: "Lorelai", timeSpent: 31 },
    ],
  };


  //Task 3
  
  /*
  დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
  აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.
  
  hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
  thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 
  
  
  */


  
  //Task 4
  /*
  დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
  არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია
  
  */


function checkIfEven(n) {
  if( n==0) return true;
  if ( n==1) return false;
  return checkIfEven(n-2);
}

console.log(checkIfEven(11));



  

  
